import { useShowPopup } from '../../../../../hooks/useShowPopup';
import { useSortDescendingOrder } from '../../../../../hooks/useSortDescendingOrder';
import { useTasks } from '../../../../../hooks/useTasks';
import { TasksList } from '../TasksList';

export const TasksListContainer = () => {
  const { showPopup } = useShowPopup();
  const { error, loading, tasksData } = useTasks();
  const tasks = useSortDescendingOrder(tasksData);

  if (error) throw error;
  if (loading) return <>Loading...</>;
  return <TasksList showPopup={showPopup} tasks={tasks} />;
};