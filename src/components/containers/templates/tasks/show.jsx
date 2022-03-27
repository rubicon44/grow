import React from 'react';
import styled from 'styled-components';
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

export function TaskShowTemplate(props) {
  return (
    <React.Fragment>
      <Header />
      <BackButton />
      <Background>
        <Title title="タスク詳細" />
        <TaskList task={props.task} taskCreatedUser={props.taskCreatedUser} />
      </Background>
    </React.Fragment>
  )
};