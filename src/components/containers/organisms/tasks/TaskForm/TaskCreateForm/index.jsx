import { memo, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { postTasks } from 'infra/api';
import { currentUid } from 'infra/firebase';
import { TaskForm } from 'components/containers/organisms/Tasks/TaskForm';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const TaskCreateForm = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const postTasksFunc = async (task) => {
    await postTasks(task)
    .then()
    .catch(async () => {
      setLoad(false);
      window.alert("タスクを登録できませんでした。");
      await navigate('/tasks');
    });
  };

  const [taskData, setTaskData] = useState({
    title: "",
    content: "",
    status: 0,
    startDate: "",
    endDate: "",
  });
  const title = taskData.title;
  const content = taskData.content;
  const status = taskData.status;
  const startDate = taskData.startDate;
  const endDate = taskData.endDate;
  const inputTitleRef = useRef();
  const textAreaContentRef = useRef();
  const selectStatusRef = useRef();
  const inputStartDateRef = useRef();
  const inputEndDateRef = useRef();

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    e.persist();
    setLoad(true);
    const title = inputTitleRef.current.value;
    const content = textAreaContentRef.current.value;
    const status = Number(selectStatusRef.current.value);
    const startDate = inputStartDateRef.current.value;
    const endDate = inputEndDateRef.current.value;
    const task = { title, content, status, start_date: startDate, end_date: endDate, user_id: currentUid };
    setTaskData({
      title: title,
      content: content,
      status: status,
      startDate: startDate,
      endDate: endDate,
    });
    await postTasksFunc(task);
    await navigate('/tasks');
  };

  const MemoTaskForm = memo(TaskForm);
  return (
    <>
      <TitleWithBackArrowHeader>新規登録</TitleWithBackArrowHeader>
      <MemoTaskForm
        load={load}
        title={title}
        content={content}
        status={status}
        startDate={startDate}
        endDate={endDate}
        inputTitleRef={inputTitleRef}
        textAreaContentRef={textAreaContentRef}
        selectStatusRef={selectStatusRef}
        inputStartDateRef={inputStartDateRef}
        inputEndDateRef={inputEndDateRef}
        handleTextSubmit={handleTextSubmit}
      />
    </>
  );
};