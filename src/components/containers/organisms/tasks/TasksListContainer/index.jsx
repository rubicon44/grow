import { useTasks } from "../../../../../hooks/useTasks";
import { useTasksContentTab } from "../../../../../hooks/useTasksContentTab";
import { TasksList } from "../tasksList";

export const TasksListContainer = () => {
  const { activeTab, handleTabChange } = useTasksContentTab();
  const { error, followingUserTasks, isLoading, isFetching, tasks } =
    useTasks(activeTab);

  if (error) throw error;
  if (tasks === null || followingUserTasks === null) {
    return null;
  }
  if (
    isLoading &&
    !isFetching &&
    tasks.length === 0 &&
    followingUserTasks.length === 0
  ) {
    return <p>No tasks found.</p>;
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
