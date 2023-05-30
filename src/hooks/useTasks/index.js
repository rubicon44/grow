import { useGetErrorMessage } from "../useGetErrorMessage";
import { getTasks } from "../../infra/api";
import { useApiQuery } from "../../infra/api/hooks/useApiQuery";

export const useTasks = () => {
  const { data, error } = useApiQuery("tasks", getTasks);
  const { getErrorMessage } = useGetErrorMessage();

  if (error) {
    const verbForErrorMessage = `タスク一覧`;
    const objectForErrorMessage = `取得`;
    getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
  }

  return {
    error,
    tasks: data?.data?.tasks || [],
  };
};
