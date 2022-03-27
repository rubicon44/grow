import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getUser } from '../../../../infra/api';
import { AuthContext } from '../../../../auth/authProvider';
import { getCurrentUser } from '../../../../infra/api';
import { UserShowTemplate } from '../../templates/users/show';

export function UserShow() {
  const location = useLocation();
  const locationPathName = location.pathname.split("/");
  const user_id = locationPathName[locationPathName.length -1];

  const [taskUser, setTaskUser] = useState([]);
  const [userTasks, setUserTasks] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getUser(user_id)
    .then(response => {
      const taskUser = response.data.user;
      let taskData = taskUser.tasks;
      const dOrderData = sortdOrder(taskData);
      if (isMounted) setTaskUser(taskUser);
      if (isMounted) setUserTasks(dOrderData);
    })
    .catch(data => {
      console.log(data);
    });
    return () => { isMounted = false };
  }, [user_id, taskUser]);

  const sortdOrder = (taskData) => {
    const list = taskData;
    if (list.length === 0) {
      const dOrder = [];
      return dOrder;
    } else {
      const dOrder = list.sort(function (a, b) {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
        return 0;
      });
      return dOrder;
    }
  };

  const { currentUser } = useContext(AuthContext);
  const [currentUserId, setCurrentUserId] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getCurrentUser()
    .then(response => {
      const currentUserId = response.data.user.id;
      if (isMounted) setCurrentUserId(currentUserId);
    })
    .catch(data => {
      console.log(data);
    });
    return () => { isMounted = false };
  }, [currentUserId]);

  return (
    <UserShowTemplate taskUser={taskUser} userTasks={userTasks} currentUserId={currentUserId} currentUser={currentUser} />
  )
};