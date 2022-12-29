import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTask } from 'infra/api';

export const useTaskData = () => {
  const location = useLocation();
  const locationPathName = location.pathname.split('/');
  const currentTaskId = locationPathName[locationPathName.length - 1];
  const [taskData, setTaskData] = useState({
    task: [],
    taskCreatedUser: [],
    taskCreatedUserName: null,
  });
  useEffect(() => {
    let isMounted = true;
    getTask(currentTaskId)
      .then((response) => {
        if (isMounted) setTaskData({
          task: response.data,
          taskCreatedUser: response.data.user,
          taskCreatedUserName: response.data.user.username,
        });
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, [currentTaskId]);

  return taskData;
};