import { useFollowingUserTasksData } from "../useFollowingUserTasksData";
import { useTasksData } from "../useTasksData";

export const useTasks = (activeTab) => {
  const {
    error: tasksError,
    isLoading: tasksIsLoading,
    outerElementTasksRef,
    tasks,
  } = useTasksData(activeTab);
  const {
    error: followingUserTasksError,
    isLoading: followingUserTasksIsLoading,
    followingUserTasks,
  } = useFollowingUserTasksData(activeTab);

  return {
    error: tasksError || followingUserTasksError,
    isLoading: tasksIsLoading || followingUserTasksIsLoading,
    outerElementTasksRef,
    tasks,
    followingUserTasks,
  };
};
