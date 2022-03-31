import React from 'react';
import { useLocation } from 'react-router-dom';
import { TaskEditTemplate } from '../../templates/tasks/edit';

export function TaskEdit() {
  const location = useLocation();
  const { id } = location.state;
  const { title } = location.state;
  const { content } = location.state;
  const { currentUserId } = location.state;

  return (
    <TaskEditTemplate
      id={id}
      title={title}
      content={content}
      currentUserId={currentUserId}
    />
  );
}
