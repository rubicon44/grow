import { useEffect, useState } from "react";
import { useGetErrorMessage } from "../useGetErrorMessage";
import { useUserNameInUrl } from "../useUserNameInUrl";
import { getUser } from "../../infra/api";

export const useUserData = () => {
  const { userNameInUrl } = useUserNameInUrl();
  const { getErrorMessage } = useGetErrorMessage();
  const [checkUserNameChange, setCheckUserNameChange] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState();

  useEffect(() => {
    const handleSuccess = (userData) => {
      // todo: Consider a way to change snake-case to camel-case.
      const { likedTasks, ...newUserData } = userData;
      const newDataWithLikedTasksKey = { ...newUserData, likedTasks };
      setUserData(newDataWithLikedTasksKey);
    };

    const handleError = (error) => {
      setError(error);
      console.error(`ユーザーデータの取得中にエラーが発生しました。: `, error);
      const verbForErrorMessage = `ユーザーデータ`;
      const objectForErrorMessage = `取得`;
      getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
    };

    const fetchUserData = async (userNameInUrl) => {
      setLoading(true);
      setError(null);

      try {
        // todo: エラーの際、他ユーザーをフォローできてしまうかも。
        const response = await getUser(userNameInUrl);
        const userData = response.data;
        handleSuccess(userData);
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
        setCheckUserNameChange(false);
      }
    };

    fetchUserData(userNameInUrl);
  }, [checkUserNameChange, userNameInUrl, getErrorMessage]);

  return {
    error,
    loading,
    setCheckUserNameChange,
    setUserData,
    userData,
    userNameInUrl,
  };
};
