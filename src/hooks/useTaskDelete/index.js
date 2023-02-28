import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetErrorMessage } from '../useGetErrorMessage';
import { deleteTask } from '../../infra/api';

export const useTaskDelete = (taskData) => {
  const { id: taskId } = taskData.task;
  const { username: taskCreatedUserName } = taskData.taskCreatedUser;
  const navigateToUser = useNavigate();
  const { getErrorMessage } = useGetErrorMessage();

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
      // todo: Consider using useContext instead of useNavigate to show Popup.
      navigateToUser(`/${taskCreatedUserName}`, {
        state: {
          showPopup: true,
        },
      });
    } catch (error) {
      console.error(`タスクの削除中にエラーが発生しました。: `, error);
      const verbForErrorMessage = `タスク`;
      const objectForErrorMessage = `削除`;
      getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
    } finally {
      setDeleting(false);
      setIsButtonDisabled(false);
      setDeleteCheckAble(false);
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