import React from 'react';
import { Header } from '../../organisms/header';
import { Main } from '../main';
import { TasksList } from '../../organisms/tasks/tasksList';

export function TaskIndexTemplate() {
  return (
    <>
      <Header />
      <Main>
        <TasksList />
      </Main>
    </>
  );
}