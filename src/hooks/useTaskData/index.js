import { useEffect, useState } from 'react';
import { useCurrentTaskId } from '../useCurrentTaskId';
import { useGetErrorMessage } from '../useGetErrorMessage';
import { getTask } from '../../infra/api';

export const useTaskData = () => {
  const currentTaskId = useCurrentTaskId();
  const { getErrorMessage } = useGetErrorMessage();
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
        console.error(`タスクの取得中にエラーが発生しました。: `, error);
        const verbForErrorMessage = `タスク`;
        const objectForErrorMessage = `取得`;
        getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
      } finally {
        setLoading(false);
      };
    };
    fetchTaskData();
  }, [currentTaskId]);

  return { loading, error, taskData };
};