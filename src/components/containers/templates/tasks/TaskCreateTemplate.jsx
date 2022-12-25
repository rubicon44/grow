import React from 'react';
import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { TaskCreateForm } from 'components/containers/organisms/Tasks/TaskForm/TaskCreateForm';

export const TaskCreateTemplate = () => {
  return (
    <MainWithHeader>
      <TaskCreateForm />
    </MainWithHeader>
  );
};