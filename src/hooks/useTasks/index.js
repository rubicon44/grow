import { useCurrentUserId } from "../useCurrentUserId";
import { getTasks } from "../../infra/api";
import { useApiQuery } from "../../infra/api/hooks/useApiQuery";

export const useTasks = () => {
  const currentUserId = useCurrentUserId();
  const { data, error } = useApiQuery("tasks", () =>
    getTasks({ currentUserId })
  );

  const transformedData = {
    followingUserTasks:
      data?.data?.followingUserTasks?.map((task) => ({
        ...task,
        id: task.id.toString(),
        userId: task.userId.toString(),
        user: {
          ...task.user,
          id: task.user.id.toString(),
        },
      })) || [],
    tasks:
      data?.data?.tasks?.map((task) => ({
        ...task,
        id: task.id.toString(),
        userId: task.userId.toString(),
        user: {
          ...task.user,
          id: task.user.id.toString(),
        },
      })) || [],
  };

  return {
    error,
    ...transformedData,
  };
};
