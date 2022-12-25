import React from 'react';
import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { TaskList } from 'components/containers/organisms/Tasks/TaskList';

export const TaskShowTemplate = () => {
  return (
    <MainWithHeader>
      <TaskList />
    </MainWithHeader>
  );
}