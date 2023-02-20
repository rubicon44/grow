import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTask } from 'infra/api';

export const useTaskEditAndDelete = (taskData) => {
  const { id: taskId } = taskData.task;
  const { title: taskTitle } = taskData.task;
  const { content: taskContent } = taskData.task;
  const { status: taskStatus } = taskData.task;
  const { start_date: startDate } = taskData.task;
  const { end_date: endDate } = taskData.task;
  const { username: taskCreatedUserName } = taskData.taskCreatedUser;

  const navigate = useNavigate();
  const nextEditTaskFunc = () => {
    navigate(`/tasks/edit/${taskId}`, {
      state: {
        taskData: {
          task: {
            id: taskId,
            title: taskTitle,
            content: taskContent,
            status: taskStatus,
            startDate: startDate,
            endDate: endDate,
          }
        }
      },
    });
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [deleteCheckAble, setDeleteCheckAble] = useState(false);

  const deleteCheckFunc = () => {
    setIsButtonDisabled(true);
    setDeleteCheckAble(true);
  };

  const deleteTaskFunc = async () => {
    setIsButtonDisabled(true);
    try {
      await deleteTask(taskId);
      navigate(`/${taskCreatedUserName}`, {
        state: {
          showPopup: true,
        },
      });
    } catch (error) {
      console.error('Error deleting task', error);
      window.confirm('システムエラーにより削除できませんでした。');
    } finally {
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
    nextEditTaskFunc,
    isButtonDisabled,
    unDeleteCheckFunc
  };
};