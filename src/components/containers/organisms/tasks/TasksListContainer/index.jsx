import { useTasks } from "../../../../../hooks/useTasks";
import { TasksList } from "../tasksList";

export const TasksListContainer = () => {
  const { error, tasks } = useTasks();

  if (error) throw error;
  if (tasks === null) {
    return null;
  }
  return <TasksList tasks={tasks} />;
};
