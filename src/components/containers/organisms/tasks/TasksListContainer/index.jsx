import { useShowPopup } from "../../../../../hooks/useShowPopup";
import { useTasks } from "../../../../../hooks/useTasks";
import { TasksList } from "../tasksList";

export const TasksListContainer = () => {
  const { showPopup } = useShowPopup();
  const { error, loading, tasks } = useTasks();

  if (error) throw error;
  if (loading) return <>Loading...</>;
  return <TasksList showPopup={showPopup} tasks={tasks} />;
};
