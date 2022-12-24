import React from 'react';
import { Main } from '../Main';
import { Header } from '../../organisms/Header';
import { TasksList } from '../../organisms/Tasks/TasksList';

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