import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { currentUid } from 'infra/firebase';
import { postTasks } from 'infra/api';

export const useTaskCreate = () => {
  const navigateToTasks = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const postTasksFunc = async (task) => {
    try {
      await postTasks(task);
      navigateToTasks('/tasks');
    } catch (error) {
      setIsButtonDisabled(false);
      console.error(`エラーが発生しました。: ` + error);
      if (error instanceof ReferenceError) {
        window.alert(`タスクを登録できませんでした。しばらく時間をおいて再度お試しください。`);
      } else if (error.response) {
        // HTTPステータスコードのエラー
        // const { status, data } = error.response;
        window.alert(`タスクを登録できませんでした。しばらく時間をおいて再度お試しください。`);
      } else if (error.request) {
        // ネットワークエラー
        window.alert(`タスクを登録できませんでした。ネットワークに接続されていない可能性があります。`);
      } else {
        // その他のエラー
        window.alert(`エラーが発生しました。しばらく時間をおいて再度お試しください。`);
      };
    }
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
  return { handleTextSubmit, inputRefs, isButtonDisabled, taskData };
};