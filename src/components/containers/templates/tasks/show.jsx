import React from 'react';
import { Main } from '../main';
import { Header } from '../../organisms/header';
import { TaskList } from '../../organisms/tasks/taskList';

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