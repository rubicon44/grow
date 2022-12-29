import React from 'react';
import { useNavigate } from 'react-router-dom';

export const TaskEditButton = ({ currentUserId, currentUserName, endDate, load, taskContent, taskCreatedUserId, taskId, taskStatus, taskTitle, startDate }) => {
  const navigate = useNavigate();
  const editTaskFunc = () => {
    navigate(`/tasks/edit/${taskId}`, {
      state: {
        id: taskId,
        title: taskTitle,
        content: taskContent,
        status: taskStatus,
        startDate: startDate,
        endDate: endDate,
        currentUserName,
      },
    });
  };

  return String(taskCreatedUserId) === currentUserId ? <button type="button" disabled={load} onClick={editTaskFunc}>編集</button> : null;
};