import React from 'react';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { TaskList } from '../../organisms/tasks/taskList';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  text-align: center;
  background-color: #f8f7f3;
`

export function TaskShowTemplate(props) {
  const task = props.task;
  const taskCreatedUser = props.taskCreatedUser;

  return (
    <React.Fragment>
      <Header />
      <Main>
        <TaskList task={task} taskCreatedUser={taskCreatedUser} />
      </Main>
    </React.Fragment>
  )
};