import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { postTasks } from '../../../../infra/api';
import { currentUid } from '../../../../infra/firebase';
import { Title } from '../../../presentational/atoms/Title/title';
import { BackButton } from '../../../presentational/atoms/Button/backButton';
import { Form } from '../../../presentational/molecules/Form/form';

const FormHeader = styled.div`
  display: flex;
  width: 100%;

  > h2 {
    width: 100%;
    margin-right: 45px;
  }
`;

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
  const navigate = useNavigate();
  const handleTextSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setLoad(true);
    const task = { title, content, status, user_id: currentUid };
    postTasksFunc(task);
    setLoad(false);
    navigate('/tasks');
  };

  return (
    <>
      <FormHeader>
        <BackButton />
        <Title title="新規登録" />
      </FormHeader>
      <Form
        load={load}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        status={status}
        setStatus={setStatus}
        handleTextSubmit={handleTextSubmit}
      />
    </>
  );
}
