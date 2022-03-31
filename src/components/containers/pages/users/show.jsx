import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getUser, getCurrentUser } from '../../../../infra/api';
import { AuthContext } from '../../../../auth/authProvider';
import { UserShowTemplate } from '../../templates/users/show';

export function UserShow() {
  const sortdOrder = (taskData) => {
    const list = taskData;
    if (list.length === 0) {
      const dOrder = [];
      return dOrder;
    }
    const dOrder = list.sort((a, b) => {
      if (a.id < b.id) {
        return 1;
      }
      if (a.id > b.id) {
        return -1;
      }
      return 0;
    });
    return dOrder;
  };

  const location = useLocation();
  const locationPathName = location.pathname.split('/');
  const userId = locationPathName[locationPathName.length - 1];
  const [taskUser, setTaskUser] = useState();
  const [userTasks, setUserTasks] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getUser(userId)
      .then((response) => {
        const taskUser = response.data.user;
        const taskData = taskUser.tasks;
        const dOrderData = sortdOrder(taskData);
        if (isMounted) setTaskUser(taskUser);
        if (isMounted) setUserTasks(dOrderData);
      })
      .catch();
    // .catch((data) => {
    // });
    return () => { isMounted = false; };
  }, [userId, taskUser]);

  const { currentUser } = useContext(AuthContext);
  const [currentUserId, setCurrentUserId] = useState();
  useEffect(() => {
    let isMounted = true;
    getCurrentUser()
      .then((response) => {
        const currentUserId = String(response.data.user.id);
        if (isMounted) setCurrentUserId(currentUserId);
      })
      .catch();
    // .catch((data) => {
    // });
    return () => { isMounted = false; };
  }, [currentUserId]);

  return (
    <UserShowTemplate taskUser={taskUser} userTasks={userTasks} currentUserId={currentUserId} currentUser={currentUser} />
  );
}
