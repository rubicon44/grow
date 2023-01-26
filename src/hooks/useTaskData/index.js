import { useEffect, useState } from 'react';
import { useCurrentTaskId } from 'hooks/useCurrentTaskId';
import { getTask } from 'infra/api';

export const useTaskData = () => {
  const currentTaskId = useCurrentTaskId();
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