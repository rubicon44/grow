import { useGetErrorMessage } from '../useGetErrorMessage';
import { getTasks } from '../../infra/api';
import { useApiQuery } from '../../infra/api/hooks/useApiQuery';

export const useTasks = () => {
  const { data, error, loading } = useApiQuery('tasks', getTasks);
  const { getErrorMessage } = useGetErrorMessage();

  if (error) {
    console.error(`タスクの取得中にエラーが発生しました。: `, error);
    const verbForErrorMessage = `タスク一覧`;
    const objectForErrorMessage = `取得`;
    getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
  };

  return {
    error,
    loading,
    tasks: data?.data?.tasks || [],
  };
};