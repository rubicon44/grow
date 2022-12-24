import React from 'react';
import { Main } from '../Main';
import { Header } from '../../organisms/Header';
import { TaskCreateForm } from '../../organisms/tasks/TaskForm/CreateForm';

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