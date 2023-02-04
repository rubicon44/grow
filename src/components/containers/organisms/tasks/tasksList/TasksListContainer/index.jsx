import { useSortDescendingOrder } from 'hooks/useSortDescendingOrder';
import { getTasks } from 'infra/api';
import { useApiQuery } from 'infra/api/hooks/useApiQuery';
import { TasksList } from 'components/containers/organisms/Tasks/TasksList';

export const TasksListContainer = () => {
  const { data, loading } = useApiQuery('tasks', getTasks);
  const tasks = useSortDescendingOrder(data.data);
  if(loading) return <div>Loading...</div>;
  return <TasksList tasks={tasks} />;
};