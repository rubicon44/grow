import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postTasks } from '../../../../infra/api';
import { currentUid } from '../../../../infra/firebase';
import { TitleWithBackArrowHeader } from '../../../presentational/molecules/Header/titleWithBackArrowHeader';
import { Form } from '../../../presentational/molecules/Form';

export function TaskCreateForm() {
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

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [status, setStatus] = useState(0);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const handleTextSubmit = async (e) => {
    e.preventDefault();
    e.persist();
    setLoad(true);
    const task = { title, content, status, start_date: startDate, end_date: endDate, user_id: currentUid };
    await postTasksFunc(task);
    await navigate('/tasks');
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