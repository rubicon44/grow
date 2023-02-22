import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTask } from 'infra/api';

export const useTaskDelete = (taskData) => {
  const { id: taskId } = taskData.task;
  const { username: taskCreatedUserName } = taskData.taskCreatedUser;
  const navigateToUser = useNavigate();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [deleteCheckAble, setDeleteCheckAble] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const deleteCheckFunc = () => {
    setIsButtonDisabled(true);
    setDeleteCheckAble(true);
  };

  const deleteTaskFunc = async () => {
    setIsButtonDisabled(true);
    try {
      setDeleting(true);
      await deleteTask(taskId);
    } catch (error) {
      console.error(`タスクの削除中にエラーが発生しました。: ` + error);
      let errorMessage = `タスクを削除できませんでした。しばらく時間をおいて再度お試しください。`;
      if (error instanceof ReferenceError) {
        errorMessage = `タスクを削除できませんでした。しばらく時間をおいて再度お試しください。`;
      } else if (error.response) {
        const status = error.response.status;
        switch (status) {
          case 404:
            errorMessage = `選択したタスクが見つかりませんでした。タスクが削除された可能性があります。`;
            break;
          case 403:
            errorMessage = `タスクを削除する権限がありません。`;
            break;
          case 400:
            errorMessage = `タスクを削除できませんでした。不正なリクエストが送信されました。`;
            break;
          default:
            errorMessage = `タスクを削除できませんでした。サーバーエラーが発生しました。`;
            break;
        };
      } else if (error.request) {
        errorMessage = `タスクを削除できませんでした。ネットワークに接続されていない可能性があります。`;
      } else {
        errorMessage = `タスクを削除できませんでした。しばらく時間をおいて再度お試しください。`;
      };
      window.alert(errorMessage);
    } finally {
      setDeleting(false);
      setIsButtonDisabled(false);
      setDeleteCheckAble(false);
      // todo: showPopupがtrueか否かをここで判断しているのは正しいのか？使いづらくない？ここのstateを送る作業を忘れがち。
      navigateToUser(`/${taskCreatedUserName}`, {
        state: {
          showPopup: true,
        },
      });
    };
  };

  const unDeleteCheckFunc = () => {
    setIsButtonDisabled(false);
    setDeleteCheckAble(false);
  };

  return {
    deleteCheckAble,
    deleteCheckFunc,
    deleteTaskFunc,
    deleting,
    isButtonDisabled,
    unDeleteCheckFunc
  };
};