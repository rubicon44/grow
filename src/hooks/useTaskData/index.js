import { useEffect, useState } from "react";
import { useCurrentTaskId } from "../useCurrentTaskId";
import { useGetErrorMessage } from "../useGetErrorMessage";
import { getTask } from "../../infra/api";

export const useTaskData = () => {
  const currentTaskId = useCurrentTaskId();
  const { getErrorMessage } = useGetErrorMessage();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    const fetchTaskData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getTask(currentTaskId);
        const task = response.data;
        const transformedTask = {
          ...task,
          id: task.id.toString(),
          userId: task.userId.toString(),
          user: {
            ...task.user,
            id: task.user.id.toString(),
          },
        };
        setTaskData({ task: transformedTask });
      } catch (error) {
        setError(error);
        const verbForErrorMessage = `タスク`;
        const objectForErrorMessage = `取得`;
        getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
      } finally {
        setLoading(false);
      }
    };
    fetchTaskData();
  }, [currentTaskId, getErrorMessage]);

  return { loading, error, taskData };
};
