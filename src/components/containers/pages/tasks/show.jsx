import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTask } from '../../../../infra/api';
import { TaskShowTemplate } from '../../templates/tasks/show';

export function TaskShow() {
  const location = useLocation();
  const locationPathName = location.pathname.split("/");
  const task_id = locationPathName[locationPathName.length -1];
  const [task, setTask] = useState([]);
  const [taskTitle, setTaskTitle] = useState([]);
  const [taskContent, setTaskContent] = useState([]);
  const [taskCreatedUser, setTaskCreatedUser] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getTask(task_id)
    .then(response => {
      console.log(response.data);
      if (isMounted) setTaskTitle(response.data.title);
      if (isMounted) setTaskContent(response.data.content);
      if (isMounted) setTask(response.data);
      if (isMounted) setTaskCreatedUser(response.data.user);
    })
    .catch(data => {
      console.log(data);
    });
    return () => { isMounted = false };
  }, [task_id, taskTitle, taskContent]);

  return (
    <TaskShowTemplate task={task} taskCreatedUser={taskCreatedUser} />
  )
};