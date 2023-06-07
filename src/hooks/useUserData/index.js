import { useEffect, useState } from "react";
import { useCurrentPathSegment } from "../useCurrentPathSegment";
import { getUser } from "../../infra/api";

export const useUserData = () => {
  const { currentPathSegment } = useCurrentPathSegment();
  const [checkUserNameChange, setCheckUserNameChange] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const [page, setPage] = useState(1); // ページ番号
  const pageSize = 10; // 1ページあたりのタスク数

  useEffect(() => {
    const handleSuccess = (userData) => {
      const { likedTasks, ...newUserData } = userData;
      const newDataWithLikedTasksKey = { ...newUserData, likedTasks };
      setUserData((prevUserData) => {
        if (prevUserData) {
          // 重複を避けるために、新しいタスクを追加する前に重複をフィルタリング
          const filteredLikedTasks = newDataWithLikedTasksKey.likedTasks.filter(
            (newTask) =>
              !prevUserData.likedTasks.find(
                (existingTask) => existingTask.id === newTask.id
              )
          );
          const filteredTasks = newDataWithLikedTasksKey.tasks.filter(
            (newTask) =>
              !prevUserData.tasks.find(
                (existingTask) => existingTask.id === newTask.id
              )
          );

          return {
            ...prevUserData,
            ...newDataWithLikedTasksKey,
            likedTasks: [...prevUserData.likedTasks, ...filteredLikedTasks],
            tasks: [...prevUserData.tasks, ...filteredTasks],
          };
        }
        return newDataWithLikedTasksKey;
      });
    };

    const fetchUserData = async (currentPathSegment) => {
      setLoading(true);
      setError(null);

      try {
        const response = await getUser(currentPathSegment, page, pageSize);
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

    fetchUserData(currentPathSegment, page);
  }, [checkUserNameChange, currentPathSegment, page]);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // console.log(scrollTop);
    // console.log(windowHeight);
    // console.log(documentHeight);

    if (scrollTop + windowHeight >= documentHeight) {
      // 最下部にスクロールされ、データのロード中でない場合に次のページのデータを取得
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    error,
    loading,
    page,
    setCheckUserNameChange,
    setUserData,
    userData,
    currentPathSegment,
  };
};
