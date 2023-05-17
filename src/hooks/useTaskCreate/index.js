import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentUserId } from '../useCurrentUserId';
import { useGetErrorMessage } from '../useGetErrorMessage';
import { useInputSanitization } from '../useInputSanitization';
import { useInputValidation } from '../useInputValidation';
import { postTasks } from '../../infra/api';

export const useTaskCreate = () => {
  const navigateToTasks = useNavigate();
  const currentUserId = useCurrentUserId();
  const { getErrorMessage } = useGetErrorMessage();
  const { sanitizeInput } = useInputSanitization();
  const { validateInput, validateTask } = useInputValidation();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [creating, setCreating] = useState(false);

  const postTasksFunc = async (task) => {
    try {
      setCreating(true);
      await postTasks(task);
      navigateToTasks('/tasks', {
        state: { showPopup: true },
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
    task: { title: "", content: "", status: 0, startDate: "", endDate: "" }
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

    const title = sanitizeInput(titleRef.current.value, { trim: true, ALLOWED_TAGS: [] });
    const content = sanitizeInput(contentRef.current.value);
    const status = Number(statusRef.current.value);
    const startDate = startDateRef.current.value;
    const endDate = endDateRef.current.value;

    if (
      !validateInput(title, 'タイトル', { maxLength: 255, nullFalse: false }) ||
      !validateInput(content, 'コンテンツ', { maxLength: 5000 }) ||
      !validateTask(startDate, endDate)
    ) {
      setIsButtonDisabled(false);
      return;
    }

    if ((endDate && startDate) && endDate < startDate) {
      window.alert('開始日には、終了日よりも前の日付を設定してください。');
      setIsButtonDisabled(false);
      return;
    };

    const task = { title, content, status, startDate, endDate, userId: currentUserId };
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