import { useEffect, useState } from "react";
import { useCurrentPathSegment } from "../useCurrentPathSegment";
import { getUser } from "../../infra/api";

export const useUserData = () => {
  const { currentPathSegment } = useCurrentPathSegment();
  const [checkUserNameChange, setCheckUserNameChange] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const handleSuccess = (userData) => {
      const { likedTasks, ...newUserData } = userData;
      const newDataWithLikedTasksKey = { ...newUserData, likedTasks };
      setUserData(newDataWithLikedTasksKey);
    };

    const fetchUserData = async (currentPathSegment) => {
      setLoading(true);
      setError(null);

      try {
        const response = await getUser(currentPathSegment);
        const userData = response.data;
        const transformedUserData = {
          ...userData,
          id: userData.id.toString(),
          likedTasks: userData.likedTasks.map((likedTask) => ({
            ...likedTask,
            id: likedTask.id.toString(),
            userId: likedTask.userId.toString(),
            user: {
              ...likedTask.user,
              id: likedTask.user.id.toString(),
            },
          })),
          tasks: userData.tasks.map((task) => ({
            ...task,
            id: task.id.toString(),
            userId: task.userId.toString(),
            user: {
              ...task.user,
              id: task.user.id.toString(),
            },
          })),
        };
        handleSuccess(transformedUserData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
        setCheckUserNameChange(false);
      }
    };

    fetchUserData(currentPathSegment);
  }, [checkUserNameChange, currentPathSegment]);

  return {
    error,
    loading,
    setCheckUserNameChange,
    setUserData,
    userData,
    currentPathSegment,
  };
};
