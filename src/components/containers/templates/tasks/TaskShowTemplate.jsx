import React from 'react';
import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { TaskListContainer } from 'components/containers/organisms/Tasks/TaskList/TaskListContainer';

export const TaskShowTemplate = () => {
  return (
    <MainWithHeader>
      <TaskListContainer />
    </MainWithHeader>
  );
}