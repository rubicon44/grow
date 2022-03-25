import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateTask } from '../../../infra/api';
import { Form } from '../../presentational/molecules/Form/index';

export function FormUpdate(props) {
  const navigate = useNavigate();
  let [id, setId] = useState([]);
  let [task, setTask] = useState([]);
  let [title, setTitle] = useState([]);
  let [content, setContent] = useState([]);
  let [currentUserId, setCurrentUserId] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const id = props.id;
    const title = props.title;
    const content = props.content;
    const currentUserId = props.current_user_id;
    if (isMounted) setId(id);
    if (isMounted) setTitle(title);
    if (isMounted) setContent(content);
    if (isMounted) setCurrentUserId(currentUserId);
    return () => { isMounted = false };
  }, [id]);

  const updateTaskFunc = (id, task) => {
    updateTask(id, task)
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
    task = { 'title': title, 'content': content };
    setTask(task);
    updateTaskFunc(id, task);
    setLoad(false)
    navigate(`/users/${currentUserId}/tasks/${id}`);
  }

  return (
    <Form title={title} content={content} setTitle={setTitle} setContent={setContent} load={load} handleTextSubmit={handleTextSubmit} />
  )
}