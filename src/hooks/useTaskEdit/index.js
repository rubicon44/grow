import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentUserName } from 'hooks/useCurrentUserName';
import { updateTask } from 'infra/api';

export const useTaskEdit = (taskDataTask) => {
  const navigateToUserTask = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [editing, setEditing] = useState(false);
  const { id: taskId, title: taskTitle, content: taskContent, status: taskStatus, start_date: taskStartDate, end_date: taskEndDate } = taskDataTask;

  const updateTaskFunc = async (taskId, task) => {
    try {
      setEditing(true);
      await updateTask(taskId, task)
    } catch (error) {
      console.error(`タスクの編集中にエラーが発生しました。: ` + error);
      let errorMessage = `タスクを編集できませんでした。しばらく時間をおいて再度お試しください。`;
      if (error instanceof ReferenceError) {
        errorMessage = `タスクを編集できませんでした。しばらく時間をおいて再度お試しください。`;
      } else if (error.response) {
        const status = error.response.status;
        switch (status) {
          case 404:
            errorMessage = `選択したタスクが見つかりませんでした。タスクが削除された可能性があります。`;
            break;
          case 403:
            errorMessage = `タスクを編集する権限がありません。`;
            break;
          case 400:
            errorMessage = `タスクを編集できませんでした。不正なリクエストが送信されました。`;
            break;
          default:
            errorMessage = `タスクを編集できませんでした。サーバーエラーが発生しました。`;
            break;
        };
      } else if (error.request) {
        errorMessage = `タスクを編集できませんでした。ネットワークに接続されていない可能性があります。`;
      } else {
        errorMessage = `タスクを編集できませんでした。しばらく時間をおいて再度お試しください。`;
      };
      window.alert(errorMessage);
    } finally {
      setEditing(false);
      setIsButtonDisabled(false);
      navigateToUserTask(`/${currentUserName}/tasks/${taskId}`, {
        state: {
          showPopup: true,
        },
      });
    };
  };

  const currentUserName = useCurrentUserName();
  const [taskData, setTaskData] = useState({
    task: {
      title: taskTitle,
      content: taskContent,
      status: taskStatus,
      startDate: taskStartDate,
      endDate: taskEndDate,
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
    e.persist();
    setIsButtonDisabled(true);
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const status = Number(statusRef.current.value);
    const startDate = startDateRef.current.value;
    const endDate = endDateRef.current.value;
    const task = { title, content, status, start_date: startDate, end_date: endDate };
    setTaskData({ task });
    await updateTaskFunc(taskId, task);
  };

  return {
    editing,
    handleTextSubmit,
    inputRefs,
    isButtonDisabled,
    taskData,
  };
};