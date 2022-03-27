import React from 'react';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { Title } from '../../../presentational/atoms/Title/title';
import { NextTask } from '../../../presentational/atoms/Button/nextTask';
import { TasksList } from '../../organisms/tasks/tasksList';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f8f7f3;
`

export function TaskIndexTemplate(props) {
  return (
    <React.Fragment>
      <Header />
      <Background>
        <Title title="タスク一覧" />
        <NextTask text="タスク登録" url="/tasks/create" />
        <TasksList tasks={props.tasks} />
      </Background>
    </React.Fragment>
  )
};