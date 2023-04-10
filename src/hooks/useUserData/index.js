import { useEffect, useState } from 'react';
import { useGetErrorMessage } from '../useGetErrorMessage';
import { useSortDescendingOrder } from '../useSortDescendingOrder';
import { useUserNameInUrl } from '../useUserNameInUrl';
import { getUser } from '../../infra/api';

export const useUserData = () => {
  const { userNameInUrl } = useUserNameInUrl();
  const { getErrorMessage } = useGetErrorMessage();
  const [checkUserNameChange, setCheckUserNameChange] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    taskUser: [],
    userTasks: [],
    likedTasksWithUser: [],
    userBio: "",
    userNickName: "",
    userName: "",
    userId: "",
  });

  const sortedData = useSortDescendingOrder(userData.userTasks);

  useEffect(() => {
    const handleSuccess = (userData) => {
      const user = userData.user
      const taskData = user.tasks;
      const liked_tasks_with_user = userData.liked_tasks_with_user;

      setUserData({
        taskUser: user,
        userTasks: taskData,
        // todo: liked_tasks_with_userがuserDataに格納されていることを知るには、propsTypes等が役に立つ？
        likedTasksWithUser: liked_tasks_with_user,
        userBio: user.bio,
        userNickName: user.nickname,
        userName: user.username,
        userId: String(user.id),
      });
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
        const response = await getUser(userNameInUrl)
        const userData = response.data;
        handleSuccess(userData);
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
        setCheckUserNameChange(false);
      };
    };

    fetchUserData(userNameInUrl);

  }, [checkUserNameChange, userNameInUrl, getErrorMessage]);

  return {
    error,
    loading,
    setCheckUserNameChange,
    setUserData,
    userData: { ...userData, userTasks: sortedData },
    userNameInUrl
  };
};