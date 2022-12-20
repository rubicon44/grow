import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateTask } from '../../../../infra/api';
import { TitleWithBackArrowHeader } from '../../../presentational/molecules/Header/titleWithBackArrowHeader';
import { Form } from '../../../presentational/molecules/Form';

export const TaskUpdateForm = (props) => {
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
  const inputContentRef = useRef();
  const selectStatusRef = useRef();
  const inputStartDateRef = useRef();
  const inputEndDateRef = useRef();

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    e.persist();
    setLoad(true);
    const title = inputTitleRef.current.value;
    const content = inputContentRef.current.value;
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

  const MemoForm = React.memo(Form);
  return (
    <>
      <TitleWithBackArrowHeader>編集</TitleWithBackArrowHeader>
      <MemoForm
        load={load}
        title={title}
        content={content}
        status={status}
        startDate={startDate}
        endDate={endDate}
        inputTitleRef={inputTitleRef}
        inputContentRef={inputContentRef}
        selectStatusRef={selectStatusRef}
        inputStartDateRef={inputStartDateRef}
        inputEndDateRef={inputEndDateRef}
        handleTextSubmit={handleTextSubmit}
      />
    </>
  );
};

TaskUpdateForm.defaultProps = {
  id: 0,
  title: '',
  content: '',
  status: 0,
  currentUserId: '',
};

TaskUpdateForm.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  status: PropTypes.number,
  currentUserId: PropTypes.string,
};