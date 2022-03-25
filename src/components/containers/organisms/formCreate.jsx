import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postTasks } from '../../../infra/api';
import { current_uid } from '../../../infra/firebase.js';
import { Form } from '../../presentational/molecules/Form/index';

export function FormCreate() {
  const navigate = useNavigate();
  let [task, setTask] = useState([]);
  let [title, setTitle] = useState([]);
  let [content, setContent] = useState([]);

  const postTasksFunc = (task) => {
    postTasks(task)
    .then(response => {
      console.log(response.data);
    })
    .catch(response => {
      console.log(response.data);
    });
  };

  const [load, setLoad] = useState(false);
  const handleTextSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setLoad(true);
    task = { 'title': title, 'content': content, 'user_id': current_uid };
    setTask(task);
    postTasksFunc(task);
    setLoad(false)
    navigate("/tasks");
  }

  return (
    <Form content={content} setTitle={setTitle} setContent={setContent} load={load} handleTextSubmit={handleTextSubmit} />
  )
}