import React from 'react';
import { Main } from '../main';
import { Header } from '../../organisms/header';
import { TasksList } from '../../organisms/tasks/tasksList';

export const TaskIndexTemplate = () => {
  return (
    <>
      <Header />
      <Main>
        <TasksList />
      </Main>
    </>
  );
}