import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserId } from "../useCurrentUserId";
import { useCurrentUserName } from "../useCurrentUserName";
import { useInputSanitization } from "../useInputSanitization";
import { useInputValidation } from "../useInputValidation";
import { updateTask } from "../../infra/api";

export const useTaskEdit = (taskDataTask) => {
  const navigateToUserTask = useNavigate();
  const currentUserId = useCurrentUserId();
  const currentUserName = useCurrentUserName();
  const { sanitizeInput } = useInputSanitization();
  const { validateInput, validateTask } = useInputValidation();
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const {
    id: taskId,
    title: taskTitle,
    content: taskContent,
    status: taskStatus,
    startDate: taskStartDate,
    endDate: taskEndDate,
  } = taskDataTask;

  const updateTaskFunc = async (taskId, task, currentUserId) => {
    try {
      setEditing(true);
      await updateTask(taskId, {
        ...task,
        currentUserId: Number(currentUserId),
      });
      navigateToUserTask(`/${currentUserName}/tasks/${taskId}`, {
        state: { showPopup: true },
      });
    } catch (error) {
      setError(error);
    } finally {
      setEditing(false);
      setIsButtonDisabled(false);
    }
  };

  const [taskData, setTaskData] = useState({
    task: {
      title: taskTitle,
      content: taskContent,
      status: taskStatus,
      startDate: taskStartDate,
      endDate: taskEndDate,
    },
  });
  const titleRef = useRef();
  const contentRef = useRef();
  const statusRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const inputRefs = {
    titleRef,
    contentRef,
    statusRef,
    startDateRef,
    endDateRef,
  };

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    e.persist();
    setIsButtonDisabled(true);

    const title = sanitizeInput(titleRef.current.value, {
      trim: true,
      ALLOWED_TAGS: [],
    });
    const content = sanitizeInput(contentRef.current.value);
    const status = Number(statusRef.current.value);
    const startDate = startDateRef.current.value;
    const endDate = endDateRef.current.value;

    if (
      !validateInput(title, "タイトル", { maxLength: 255, nullFalse: false }) ||
      !validateInput(content, "コンテンツ", { maxLength: 5000 }) ||
      !validateTask(startDate, endDate)
    ) {
      setIsButtonDisabled(false);
      return;
    }

    if (endDate && startDate && endDate < startDate) {
      alert("開始日には、終了日よりも前の日付を設定してください。");
      setIsButtonDisabled(false);
      return;
    }

    const task = { title, content, status, startDate, endDate };
    setTaskData({ task });
    await updateTaskFunc(taskId, task, currentUserId);
  };

  return {
    editing,
    error,
    handleTextSubmit,
    inputRefs,
    isButtonDisabled,
    taskData,
  };
};
