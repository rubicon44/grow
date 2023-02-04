import { useSortDescendingOrder } from 'hooks/useSortDescendingOrder';
import { useTasks } from 'hooks/useTasks';
import { TasksList } from 'components/containers/organisms/Tasks/TasksList';

export const TasksListContainer = () => {
  const { tasksData, loading } = useTasks();
  const tasks = useSortDescendingOrder(tasksData);
  if(loading) return <div>Loading...</div>;
  return <TasksList tasks={tasks} />;
};