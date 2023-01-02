import { useSortDescendingOrder } from 'hooks/useSortDescendingOrder';
import { useTasks } from 'hooks/useTasks';
import { TasksList } from 'components/containers/organisms/Tasks/TasksList';

export const TasksListContainer = () => {
  const tasks = useSortDescendingOrder(useTasks());
  return <TasksList tasks={tasks}  />;
};