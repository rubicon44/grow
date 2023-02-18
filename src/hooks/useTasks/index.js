import { getTasks } from 'infra/api';
import { useApiQuery } from 'infra/api/hooks/useApiQuery';

export const useTasks = () => {
  const { data, error, loading } = useApiQuery('tasks', getTasks);

  return {
    tasksData: data.data,
    error,
    loading,
  };
};