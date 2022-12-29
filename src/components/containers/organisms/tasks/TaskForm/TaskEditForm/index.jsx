import { memo, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateTask } from 'infra/api';
import { TaskForm } from 'components/containers/organisms/Tasks/TaskForm';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const TaskEditForm = (props) => {
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

  const { title: taskTitle } = props;
  const { content: taskContent } = props;
  const { status: taskStatus } = props;
  const { startDate: taskStartDate } = props;
  const { endDate: taskEndDate } = props;
  const { id } = props;
  const { currentUserName } = props;
  // todo: useStateを使用せずに定数を使用すると、フォーム更新時にinput要素に、更新前の定数の値が一瞬表示される。定数を使用することはできないのだろうか。
  const [taskData, setTaskData] = useState({
    title: taskTitle,
    content: taskContent,
    status: taskStatus,
    startDate: taskStartDate,
    endDate: taskEndDate,
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
    const task = { title, content, status, start_date: startDate, end_date: endDate };
    setTaskData({
      title: title,
      content: content,
      status: status,
      startDate: startDate,
      endDate: endDate,
    });
    await updateTaskFunc(id, task);
    await navigate(`/${currentUserName}/tasks/${id}`);
  };

  const MemoTaskForm = memo(TaskForm);
  return (
    <>
      <TitleWithBackArrowHeader>編集</TitleWithBackArrowHeader>
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

TaskEditForm.defaultProps = {
  id: 0,
  title: '',
  content: '',
  status: 0,
  currentUserId: '',
};

TaskEditForm.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  status: PropTypes.number,
  currentUserId: PropTypes.string,
};