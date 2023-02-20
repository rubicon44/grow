import { useSortDescendingOrder } from 'hooks/useSortDescendingOrder';
import { useTasks } from 'hooks/useTasks';
import { TasksList } from 'components/containers/organisms/Tasks/TasksList';

export const TasksListContainer = () => {
  const { error, loading, tasksData } = useTasks();
  const tasks = useSortDescendingOrder(tasksData);

  if (error) throw error;
  if (loading) return <>Loading...</>;
  return <TasksList tasks={tasks} />;
};