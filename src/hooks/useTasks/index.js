import { getTasks } from 'infra/api';
import { useApiQuery } from 'infra/api/hooks/useApiQuery';

export const useTasks = () => {
  const { data, loading } = useApiQuery('tasks', getTasks);
  return {
    tasksData: data.data,
    loading,
  };
};