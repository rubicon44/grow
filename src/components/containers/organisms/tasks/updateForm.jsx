import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { updateTask } from '../../../../infra/api';
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

export function TaskUpdateForm(props) {
  const [load, setLoad] = useState(false);
  const [title, setTitle] = useState([props.title]);
  const [content, setContent] = useState([props.content]);
  const id = props.id;
  const currentUserId = props.current_user_id;
  const navigate = useNavigate();
  const handleTextSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setLoad(true);
    let task = { 'title': title, 'content': content };
    updateTaskFunc(id, task);
    setLoad(false)
    navigate(`/users/${currentUserId}/tasks/${id}`);
  };

  const updateTaskFunc = (id, task) => {
    updateTask(id, task)
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
        <Title title="編集" />
      </FormHeader>
      <Form load={load} title={title} setTitle={setTitle} content={content} setContent={setContent} handleTextSubmit={handleTextSubmit} />
    </React.Fragment>
  )
}

TaskUpdateForm.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  current_user_id: PropTypes.string
};