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
    task: { id: '', title: '', content: '', status: '', startDate: '', endDate: '' },
  });

  useEffect(() => {
    const fetchTaskData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getTask(currentTaskId);
        const task = response.data;
        // todo: 型変換の適切性を検証
        task.id = task.id.toString();
        task.userId = task.userId.toString();
        setTaskData({ task: task });
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
  }, [currentTaskId, getErrorMessage]);

  return { loading, error, taskData };
};