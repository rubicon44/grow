import { getTasks } from 'infra/api';
import { useApiQuery } from 'infra/api/hooks/useApiQuery';

export const useTasks = () => {
  const { data, error, loading } = useApiQuery('tasks', getTasks);

  return {
    error,
    loading,
    tasksData: data.data,
  };
};