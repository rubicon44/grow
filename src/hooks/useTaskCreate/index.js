import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { currentUid } from 'infra/firebase';
import { postTasks } from 'infra/api';

export const useTaskCreate = () => {
  const navigateToTasks = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [creating, setCreating] = useState(false);

  const postTasksFunc = async (task) => {
    try {
      setCreating(true);
      await postTasks(task);
    } catch (error) {
      console.error(`タスクの登録中にエラーが発生しました。: ` + error);
      let errorMessage = `タスクを登録できませんでした。しばらく時間をおいて再度お試しください。`;
      if (error instanceof ReferenceError) {
        errorMessage = `タスクを登録できませんでした。しばらく時間をおいて再度お試しください。`;
      } else if (error.response) {
        const status = error.response.status;
        switch (status) {
          case 404:
            errorMessage = `選択したタスクが見つかりませんでした。タスクが削除された可能性があります。`;
            break;
          case 403:
            errorMessage = `タスクを登録する権限がありません。`;
            break;
          case 400:
            errorMessage = `タスクを登録できませんでした。不正なリクエストが送信されました。`;
            break;
          default:
            errorMessage = `タスクを登録できませんでした。サーバーエラーが発生しました。`;
            break;
        };
      } else if (error.request) {
        errorMessage = `タスクを登録できませんでした。ネットワークに接続されていない可能性があります。`;
      } else {
        errorMessage = `タスクを登録できませんでした。しばらく時間をおいて再度お試しください。`;
      };
      window.alert(errorMessage);
    } finally {
      setCreating(false);
      setIsButtonDisabled(false);
      navigateToTasks('/tasks', {
        state: {
          showPopup: true,
        },
      });
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