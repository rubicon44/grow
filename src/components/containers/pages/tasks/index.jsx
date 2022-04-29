import React, { useState, useEffect } from 'react';
import { getTasks, getCurrentUser } from '../../../../infra/api';
import { TaskIndexTemplate } from '../../templates/tasks';

export function TaskIndex() {
  const sortdOrder = (response) => {
    const list = response.data;
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

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getTasks()
      .then((response) => {
        const dOrderData = sortdOrder(response);
        if (isMounted) setTasks(dOrderData);
      })
      .catch();
    // .catch(() => {
    // });
    return () => {
      isMounted = false;
    };
  }, [tasks]);

  const [currentUserId, setCurrentUserId] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getCurrentUser()
      .then((response) => {
        const currentUserId = response.data.user.id;
        if (isMounted) setCurrentUserId(currentUserId);
      })
      .catch();
    // .catch((data) => {
    // });
    return () => {
      isMounted = false;
    };
  }, [currentUserId]);

  return <TaskIndexTemplate tasks={tasks} currentUserId={currentUserId} />;
}
