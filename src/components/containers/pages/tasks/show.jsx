import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getTask } from '../../../../infra/api';
import { Header } from '../../organisms/header';
import { Title } from '../../../presentational/atoms/Title/title';
import { BackButton } from '../../../presentational/atoms/Button/backButton';
import { TaskList } from '../../organisms/tasks/taskList';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f8f7f3;
`

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
    <React.Fragment>
      <Header />
      <BackButton />
      <Background>
        <Title title="タスク詳細" />
        <TaskList task={task} taskCreatedUser={taskCreatedUser} />
      </Background>
    </React.Fragment>
  )
};