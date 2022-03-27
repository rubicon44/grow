import React from 'react';
import { useLocation } from 'react-router-dom';
import { TaskEditTemplate } from '../../templates/tasks/edit';

export function TaskEdit() {
  const location = useLocation();
  const id = location.state.id;
  const title = location.state.title;
  const content = location.state.content;
  const current_user_id = location.currentUserId;

  return (
    <TaskEditTemplate id={id} title={title} content={content} current_user_id={current_user_id} />
  );
}