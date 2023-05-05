import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentUserId } from '../useCurrentUserId';
import { useCurrentUserName } from '../useCurrentUserName';
import { useGetErrorMessage } from '../useGetErrorMessage';
import { updateTask } from '../../infra/api';

export const useTaskEdit = (taskDataTask) => {
  const navigateToUserTask = useNavigate();
  const currentUserId = useCurrentUserId();
  const { getErrorMessage } = useGetErrorMessage();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [editing, setEditing] = useState(false);
  const { id: taskId, title: taskTitle, content: taskContent, status: taskStatus, startDate: taskStartDate, endDate: taskEndDate } = taskDataTask;

  const updateTaskFunc = async (taskId, task, currentUserId) => {
    try {
      setEditing(true);
      await updateTask(taskId, { ...task, currentUserId: Number(currentUserId) });
      navigateToUserTask(`/${currentUserName}/tasks/${taskId}`, {
        state: { showPopup: true },
      });
    } catch (error) {
      console.error(`タスクの編集中にエラーが発生しました。: `, error);
      const verbForErrorMessage = `タスク`;
      const objectForErrorMessage = `編集`;
      getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
    } finally {
      setEditing(false);
      setIsButtonDisabled(false);
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

    if ((endDate && startDate) && endDate < startDate) {
      window.alert('開始日には、終了日よりも前の日付を設定してください。');
      setIsButtonDisabled(false);
      return;
    };

    const task = { title, content, status, startDate: startDate, endDate: endDate };
    setTaskData({ task });
    await updateTaskFunc(taskId, task, currentUserId);
  };

  return {
    editing,
    handleTextSubmit,
    inputRefs,
    isButtonDisabled,
    taskData,
  };
};