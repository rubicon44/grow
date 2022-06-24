import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTask, getCurrentUser } from '../../../../infra/api';
import { TaskShowTemplate } from '../../templates/tasks/show';

export function TaskShow() {
  const location = useLocation();
  const locationPathName = location.pathname.split('/');
  const taskId = locationPathName[locationPathName.length - 1];
  const [task, setTask] = useState();
  const [taskTitle, setTaskTitle] = useState();
  const [taskContent, setTaskContent] = useState();
  const [taskCreatedUser, setTaskCreatedUser] = useState();
  const [taskCreatedUserName, setTaskCreatedUserName] = useState();
  useEffect(() => {
    let isMounted = true;
    getTask(taskId)
      .then((response) => {
        if (isMounted) setTaskTitle(response.data.title);
        if (isMounted) setTaskContent(response.data.content);
        if (isMounted) setTask(response.data);
        if (isMounted) setTaskCreatedUser(response.data.user);
        if (isMounted) setTaskCreatedUserName(response.data.user.username);
      })
      .catch();
    // .catch((data) => {
    // });
    return () => {
      isMounted = false;
    };
  }, [taskId, taskTitle, taskContent]);

  const [currentUserId, setCurrentUserId] = useState([]);
  const [currentUserName, setCurrentUserName] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getCurrentUser()
      .then((response) => {
        const currentUserId = response.data.user.id;
        const currentUserName = response.data.user.username;
        if (isMounted) setCurrentUserId(currentUserId);
        if (isMounted) setCurrentUserName(currentUserName);
      })
      .catch();
    // .catch((data) => {
    // });
    return () => {
      isMounted = false;
    };
  }, [currentUserId]);

  return <TaskShowTemplate task={task} taskCreatedUser={taskCreatedUser} taskCreatedUserName={taskCreatedUserName} currentUserId={currentUserId} currentUserName={currentUserName} />;
}
