import React from 'react';
import { Header } from '../../organisms/header';
import { Main } from '../main';
import { TaskCreateForm } from '../../organisms/tasks/createForm';

export const TaskCreateTemplate = () => {
  return (
    <>
      <Header />
      <Main>
        <TaskCreateForm />
      </Main>
    </>
  );
}