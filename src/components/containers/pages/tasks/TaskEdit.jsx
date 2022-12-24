import React from 'react';
import { useLocation } from 'react-router-dom';
import { TaskEditTemplate } from '../../templates/Tasks/TaskEditTemplate';

export const TaskEdit = () => {
  //todo: location.stateを使用するのは正しいのだろうか。
  const location = useLocation();
  const { id } = location.state;
  const { title } = location.state;
  const { content } = location.state;
  const { status } = location.state;
  const { startDate } = location.state;
  const { endDate } = location.state;
  const { currentUserName } = location.state;

  return (
    <TaskEditTemplate
      id={id}
      title={title}
      content={content}
      status={status}
      startDate={startDate}
      endDate={endDate}
      currentUserName={currentUserName}
    />
  );
}