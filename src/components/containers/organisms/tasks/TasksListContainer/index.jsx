import { useShowPopup } from "../../../../../hooks/useShowPopup";
import { useTasks } from "../../../../../hooks/useTasks";
import { TasksList } from "../tasksList";

export const TasksListContainer = () => {
  const { showPopup } = useShowPopup();
  const { error, tasks } = useTasks();

  if (error) throw error;
  if (tasks === null) {
    return null;
  }
  return <TasksList showPopup={showPopup} tasks={tasks} />;
};
