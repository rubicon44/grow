import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { postTasks } from '../../../../infra/api';
import { currentUid } from '../../../../infra/firebase';
import { Title } from '../../../presentational/atoms/Title';
import { BackArrow } from '../../../presentational/atoms/Arrow/backArrow';
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
      <FormHeader>
        <BackArrow />
        <Title title="新規登録" />
      </FormHeader>
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

const FormHeader = styled.div`
  display: flex;
  width: 100%;

  > h2 {
    width: 100%;
    margin-right: 45px;
  }
`;