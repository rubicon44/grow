import React from 'react';
import { Header } from '../../organisms/header';
import { Main } from '../main';
import { TaskList } from '../../organisms/tasks/taskList';

export function TaskShowTemplate() {
  return (
    <>
      <Header />
      <Main>
        <TaskList />
      </Main>
    </>
  );
}