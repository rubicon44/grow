import React from 'react';
import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { TasksList } from 'components/containers/organisms/Tasks/TasksList';

export const TasksTemplate = () => {
  return (
    <MainWithHeader>
      <TasksList />
    </MainWithHeader>
  );
}