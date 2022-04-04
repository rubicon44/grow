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
`;

export function TaskUpdateForm(props) {
  const updateTaskFunc = (id, task) => {
    updateTask(id, task).then().catch();
    // .then((response) => {
    // })
    // .catch((response) => {
    // });
  };

  const { title: taskTitle } = props;
  const { content: taskContent } = props;
  const { status: taskStatus } = props;
  const [load, setLoad] = useState(false);
  const [title, setTitle] = useState(taskTitle);
  const [content, setContent] = useState(taskContent);
  const [status, setStatus] = useState(taskStatus);
  const { id } = props;
  const { currentUserId } = props;
  const navigate = useNavigate();
  const handleTextSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setLoad(true);
    const task = { title, content, status };
    updateTaskFunc(id, task);
    setLoad(false);
    navigate(`/users/${currentUserId}/tasks/${id}`);
  };

  return (
    <>
      <FormHeader>
        <BackButton />
        <Title title="編集" />
      </FormHeader>
      <Form
        load={load}
        title={title}
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
