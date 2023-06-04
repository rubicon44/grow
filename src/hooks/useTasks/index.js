import { useCurrentUserId } from "../useCurrentUserId";
import { useGetErrorMessage } from "../useGetErrorMessage";
import { getTasks } from "../../infra/api";
import { useApiQuery } from "../../infra/api/hooks/useApiQuery";

export const useTasks = () => {
  const currentUserId = useCurrentUserId();
  const { data, error } = useApiQuery("tasks", () =>
    getTasks({ currentUserId })
  );
  const { getErrorMessage } = useGetErrorMessage();

  if (error) {
    const verbForErrorMessage = `タスク一覧`;
    const objectForErrorMessage = `取得`;
    getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
  }

  return {
    error,
    followingUserTasks: data?.data?.followingUserTasks || [],
    tasks: data?.data?.tasks || [],
  };
};
