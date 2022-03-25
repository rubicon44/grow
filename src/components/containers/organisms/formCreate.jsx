import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postTasks } from '../../../infra/api';
import { current_uid } from '../../../infra/firebase.js';
import { Form } from '../../presentational/molecules/Form/index';

export function FormCreate() {
  const [load, setLoad] = useState(false);
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const navigate = useNavigate();
  const handleTextSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setLoad(true);
    let task = { 'title': title, 'content': content, 'user_id': current_uid };
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
    <Form load={load} setTitle={setTitle} content={content} setContent={setContent} handleTextSubmit={handleTextSubmit} />
  )
}