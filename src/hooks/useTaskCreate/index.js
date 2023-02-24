import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetErrorMessage } from 'hooks/useGetErrorMessage';
import { currentUid } from 'infra/firebase';
import { postTasks } from 'infra/api';

export const useTaskCreate = () => {
  const navigateToTasks = useNavigate();
  const { getErrorMessage } = useGetErrorMessage();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [creating, setCreating] = useState(false);

  const postTasksFunc = async (task) => {
    try {
      setCreating(true);
      await postTasks(task);
      navigateToTasks('/tasks', {
        state: {
          showPopup: true,
        },
      });
    } catch (error) {
      console.error(`タスクの登録中にエラーが発生しました。: `, error);
      const verbForErrorMessage = `タスク`;
      const objectForErrorMessage = `登録`;
      getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
    } finally {
      setCreating(false);
      setIsButtonDisabled(false);
    };
  };

  const [taskData, setTaskData] = useState({
    task: {
      title: "",
      content: "",
      status: 0,
      startDate: "",
      endDate: "",
    }
  });
  const titleRef = useRef();
  const contentRef = useRef();
  const statusRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const inputRefs = { titleRef, contentRef, statusRef, startDateRef, endDateRef };

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const status = Number(statusRef.current.value);
    const startDate = startDateRef.current.value;
    const endDate = endDateRef.current.value;

    if (!title || !content) {
      window.alert('タイトルとコンテンツを入力してください。');
      setIsButtonDisabled(false);
      return;
    };

    const task = {
      title,
      content,
      status,
      start_date: startDate,
      end_date: endDate,
      user_id: currentUid
    };

    setTaskData({ task });
    await postTasksFunc(task);
  };

  return {
    creating,
    handleTextSubmit,
    inputRefs,
    isButtonDisabled,
    taskData
  };
};