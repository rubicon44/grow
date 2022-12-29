import React from 'react';
import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { TasksListContainer } from 'components/containers/organisms/Tasks/TasksList/TasksListContainer';

export const TasksTemplate = () => {
  return (
    <MainWithHeader>
      <TasksListContainer />
    </MainWithHeader>
  );
}