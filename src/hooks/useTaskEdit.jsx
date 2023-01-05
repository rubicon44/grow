import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentUserName } from 'hooks/useCurrentUserName';
import { updateTask } from 'infra/api';

export const useTaskEdit = (id, taskDataTask) => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const updateTaskFunc = async (id, task) => {
    await updateTask(id, task)
    .then()
    .catch(async () => {
      setLoad(false);
      window.alert("タスクを更新できませんでした。");
      await navigate('/tasks');
    });
  };
  const currentUserName = useCurrentUserName();
  const [taskData, setTaskData] = useState({
    task: {
      title: taskDataTask.title,
      content: taskDataTask.content,
      status: taskDataTask.status,
      startDate: taskDataTask.startDate,
      endDate: taskDataTask.endDate,
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
    setLoad(true);
    const title = inputTitleRef.current.value;
    const content = textAreaContentRef.current.value;
    const status = Number(selectStatusRef.current.value);
    const startDate = inputStartDateRef.current.value;
    const endDate = inputEndDateRef.current.value;
    const task = { title, content, status, start_date: startDate, end_date: endDate };
    setTaskData({
      task: {
        title: title,
        content: content,
        status: status,
        startDate: startDate,
        endDate: endDate,
      }
    });
    await updateTaskFunc(id, task);
    await navigate(`/${currentUserName}/tasks/${id}`);
  };

  return { taskData, handleTextSubmit, inputRef, load };
};