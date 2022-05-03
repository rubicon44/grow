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
  const [userLikedTasks, setUserLikedTasks] = useState([]);
  const [taskCreatedUser, setTaskCreatedUser] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getUser(userId)
      .then((response) => {
        const taskUser = response.data.user;
        const taskData = taskUser.tasks;
        const dOrderData = sortdOrder(taskData);
        const likeTaskData = taskUser.like_tasks;
        const taskCreatedUser = response.data.task_created_user;
        // let taskCreatedUserArray = response.data.task_created_user;
        // // Change array to abj(配列をmapで出力する場合、objへの変換は必要ない。).
        // // todo: 下記を関数化
        // const taskCreatedUser = {};
        // for(let i = 0, l = taskCreatedUserArray.length; i < l; i += 1) {
        //   const data = taskCreatedUserArray[i];
        //   taskCreatedUser[i] = data;
        // }

        if (isMounted) setTaskCreatedUser(taskCreatedUser);
        if (isMounted) setUserLikedTasks(likeTaskData);
        if (isMounted) setTaskUser(taskUser);
        if (isMounted) setUserTasks(dOrderData);
      })
      .catch();
    // .catch((data) => {
    // });
    return () => {
      isMounted = false;
    };
  }, [userId, taskUser]);

  const { currentUser } = useContext(AuthContext);
  const [currentUserAble, setCurrentUserAble] = useState(false);
  const [currentUserId, setCurrentUserId] = useState();
  useEffect(() => {
    let isMounted = true;
    if (currentUser) setCurrentUserAble(true);
    getCurrentUser()
      .then((response) => {
        const currentUserId = String(response.data.user.id);
        if (isMounted) setCurrentUserId(currentUserId);
      })
      .catch();
    // .catch((data) => {
    // });
    return () => {
      isMounted = false;
    };
  }, [currentUser, currentUserId]);

  return (
    <UserShowTemplate
      taskUser={taskUser}
      userTasks={userTasks}
      userLikedTasks={userLikedTasks}
      taskCreatedUser={taskCreatedUser}
      currentUserId={currentUserId}
      currentUserAble={currentUserAble}
    />
  );
}
