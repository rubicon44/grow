import { useEffect, useState } from "react";
import { useGetErrorMessage } from "../useGetErrorMessage";
import { useCurrentPathSegment } from "../useCurrentPathSegment";
import { getUser } from "../../infra/api";

export const useUserData = () => {
  const { currentPathSegment } = useCurrentPathSegment();
  const { getErrorMessage } = useGetErrorMessage();
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

    const handleError = (error) => {
      setError(error);
      const verbForErrorMessage = `ユーザーデータ`;
      const objectForErrorMessage = `取得`;
      getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
    };

    const fetchUserData = async (currentPathSegment) => {
      setLoading(true);
      setError(null);

      try {
        const response = await getUser(currentPathSegment);
        const userData = response.data;
        handleSuccess(userData);
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
        setCheckUserNameChange(false);
      }
    };

    fetchUserData(currentPathSegment);
  }, [checkUserNameChange, currentPathSegment, getErrorMessage]);

  return {
    error,
    loading,
    setCheckUserNameChange,
    setUserData,
    userData,
    currentPathSegment,
  };
};
