import { useEffect, useState } from "react";
import { useCurrentTaskId } from "../useCurrentTaskId";
import { getTask } from "../../infra/api";

export const useTaskData = () => {
  const currentTaskId = useCurrentTaskId();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

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
      } finally {
        setLoading(false);
      }
    };
    fetchTaskData();
  }, [currentTaskId]);

  return { loading, error, taskData };
};
