import React from 'react';
import { Main } from '../main';
import { Header } from '../../organisms/header';
import { TaskCreateForm } from '../../organisms/tasks/taskForm/createForm';

export const TaskCreateTemplate = () => {
  return (
    <>
      <Header />
      <Main>
        <TaskCreateForm />
      </Main>
    </>
  );
};