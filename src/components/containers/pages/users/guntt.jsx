import React from 'react';
import { useLocation } from 'react-router-dom';
import { UserGunttTemplate } from '../../templates/users/guntt';

export function UserGuntt() {
  const location = useLocation();
  const { taskUser } = location.state;
  const { userTasks } = location.state;

  return (
    <UserGunttTemplate
      taskUser={taskUser}
      userTasks={userTasks}
    />
  );
}