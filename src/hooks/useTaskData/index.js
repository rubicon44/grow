import { useEffect, useState } from 'react';
import { useCurrentTaskId } from 'hooks/useCurrentTaskId';
import { getTask } from 'infra/api';

// todo: wannna change name of usetaskData to useTask.
// todo: task内のjsonを変更する(例: { taskData, taskCreatedUser, taskCreatedUserName })。
// →taskの内部にtaskDataを入れ込む形(要検討)。
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