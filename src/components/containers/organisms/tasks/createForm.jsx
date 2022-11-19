import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postTasks } from '../../../../infra/api';
import { currentUid } from '../../../../infra/firebase';
import { TitleWithBackArrowHeader } from '../../../presentational/molecules/Header/titleWithBackArrowHeader';
import { Form } from '../../../presentational/molecules/Form';

export function TaskCreateForm() {
  const postTasksFunc = (task) => {
    postTasks(task).then().catch();
    // .then((response) => {
    // })
    // .catch((response) => {
    // });
  };

  const [load, setLoad] = useState(false);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [status, setStatus] = useState(0);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const navigate = useNavigate();
  const handleTextSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setLoad(true);
    const task = { title, content, status, start_date: startDate, end_date: endDate, user_id: currentUid };
    postTasksFunc(task);
    setLoad(false);
    navigate('/tasks');
  };

  return (
    <>
      <TitleWithBackArrowHeader>新規登録</TitleWithBackArrowHeader>
      <Form
        load={load}
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