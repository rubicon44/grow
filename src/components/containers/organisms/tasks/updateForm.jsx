import React, { useState } from 'react';
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
  const [title, setTitle] = useState(taskTitle);
  const [content, setContent] = useState(taskContent);
  const [status, setStatus] = useState(taskStatus);
  const [startDate, setStartDate] = useState(taskStartDate);
  const [endDate, setEndDate] = useState(taskEndDate);
  const { id } = props;
  const { currentUserName } = props;
  const handleTextSubmit = async (e) => {
    e.preventDefault();
    e.persist();
    setLoad(true);
    const task = { title, content, status, start_date: startDate, end_date: endDate };
    await updateTaskFunc(id, task);
    await navigate(`/${currentUserName}/tasks/${id}`);
  };

  return (
    <>
      <TitleWithBackArrowHeader>編集</TitleWithBackArrowHeader>
      <Form
        load={load}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        status={status}
        setStatus={setStatus}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        handleTextSubmit={handleTextSubmit}
      />
    </>
  );
}

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