import { useEffect, useState } from 'react';
import { useCurrentTaskId } from 'hooks/useCurrentTaskId';
import { getTask } from 'infra/api';

export const useTaskData = () => {
  const currentTaskId = useCurrentTaskId();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [taskData, setTaskData] = useState({
    task: { id: '', title: '', content: '', status: '', start_date: '', end_date: '' },
    taskCreatedUser: '',
    taskCreatedUserName: '',
  });

  useEffect(() => {
    const fetchTaskData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getTask(currentTaskId);
        const task = response.data;
        setTaskData({
          task: task,
          taskCreatedUser: task.user,
          taskCreatedUserName: task.user.username,
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      };
    };
    fetchTaskData();
  }, [currentTaskId]);

  return { loading, error, taskData };
};