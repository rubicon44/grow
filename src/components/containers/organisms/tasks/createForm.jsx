import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { postTasks } from '../../../../infra/api';
import { currentUid } from '../../../../infra/firebase.js';
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
`

export function TaskCreateForm() {
  const [load, setLoad] = useState(false);
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const navigate = useNavigate();
  const handleTextSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setLoad(true);
    let task = { 'title': title, 'content': content, 'user_id': currentUid };
    postTasksFunc(task);
    setLoad(false)
    navigate("/tasks");
  };

  const postTasksFunc = (task) => {
    postTasks(task)
    .then(response => {
      console.log(response.data);
    })
    .catch(response => {
      console.log(response.data);
    });
  };

  return (
    <React.Fragment>
      <FormHeader>
        <BackButton />
        <Title title="新規登録" />
      </FormHeader>
      <Form load={load} setTitle={setTitle} content={content} setContent={setContent} handleTextSubmit={handleTextSubmit} />
    </React.Fragment>
  )
}