import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateTask } from '../../../../infra/api';
import { Form } from '../../../presentational/molecules/Form/form';

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
    <Form load={load} title={title} setTitle={setTitle} content={content} setContent={setContent} handleTextSubmit={handleTextSubmit} />
  )
}