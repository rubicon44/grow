import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { currentUid } from 'infra/firebase';
import { postTasks } from 'infra/api';

export const useTaskCreate = () => {
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const postTasksFunc = async (task) => {
    await postTasks(task)
    .then()
    .catch(async () => {
      setIsButtonDisabled(false);
      window.alert("タスクを登録できませんでした。");
      await navigate('/tasks');
    });
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
  const inputTitleRef = useRef();
  const textAreaContentRef = useRef();
  const selectStatusRef = useRef();
  const inputStartDateRef = useRef();
  const inputEndDateRef = useRef();
  const inputRef = { inputTitleRef, textAreaContentRef, selectStatusRef, inputStartDateRef, inputEndDateRef };

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    e.persist();
    setIsButtonDisabled(true);
    const title = inputTitleRef.current.value;
    const content = textAreaContentRef.current.value;
    const status = Number(selectStatusRef.current.value);
    const startDate = inputStartDateRef.current.value;
    const endDate = inputEndDateRef.current.value;
    const task = { title, content, status, start_date: startDate, end_date: endDate, user_id: currentUid };
    setTaskData({
      task: {
        title: title,
        content: content,
        status: status,
        startDate: startDate,
        endDate: endDate,
      }
    });
    await postTasksFunc(task);
    await navigate('/tasks');
  };
  return { taskData, handleTextSubmit, inputRef, isButtonDisabled };
};