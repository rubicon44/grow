import { useTasks } from "../../../../../hooks/useTasks";
import { useTasksContentTab } from "../../../../../hooks/useTasksContentTab";
import { TasksList } from "../tasksList";

export const TasksListContainer = () => {
  const { error, followingUserTasks, tasks } = useTasks();
  const { activeTab, handleTabChange } = useTasksContentTab();

  if (error) throw error;
  if (tasks === null || followingUserTasks === null) {
    return null;
  }

  return (
    <TasksList
      activeTab={activeTab}
      followingUserTasks={followingUserTasks}
      handleTabChange={handleTabChange}
      tasks={tasks}
    />
  );
};
