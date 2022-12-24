import React from 'react';
import { Main } from '../Main';
import { Header } from '../../organisms/Header';
import { TaskList } from '../../organisms/Tasks/TaskList';

export const TaskShowTemplate = () => {
  return (
    <>
      <Header />
      <Main>
        <TaskList />
      </Main>
    </>
  );
}