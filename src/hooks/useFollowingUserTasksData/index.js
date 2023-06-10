import { useEffect, useState } from "react";
import { useUserDataContext } from "../../context/UserDataContextProvider";
import { useCurrentUserId } from "../useCurrentUserId";
import { getTasks } from "../../infra/api";
import { useApiQuery } from "../../infra/api/hooks/useApiQuery";

export const useFollowingUserTasksData = (activeTab) => {
  const { userData } = useUserDataContext();
  const currentUserId = useCurrentUserId();
  const [followingUserTasks, setFollowingUserTasks] = useState([]);
  const [followingUserTasksPage, setFollowingUserTasksPage] = useState(1);
  const pageSize = 3;

  const {
    data: followingUserTasksData,
    error: followingUserTasksError,
    isLoading: followingUserTasksIsLoading,
    isFetching: followingUserTasksIsFetching,
  } = useApiQuery(
    ["followingUserTasks", followingUserTasksPage, pageSize, userData],
    () =>
      getTasks({
        currentUserId,
        page: followingUserTasksPage,
        pageSize,
      })
  );

  useEffect(() => {
    if (followingUserTasksData) {
      const newFollowingUserTasks =
        followingUserTasksData?.data?.followingUserTasks?.map((task) => ({
          ...task,
          id: task.id.toString(),
          userId: task.userId.toString(),
          user: {
            ...task.user,
            id: task.user.id.toString(),
          },
        })) || [];

      if (followingUserTasksPage === 1) {
        setFollowingUserTasks(newFollowingUserTasks);
      } else {
        setFollowingUserTasks((prevFollowingUserTasks) => {
          const filteredTasks = newFollowingUserTasks.filter(
            (task) =>
              !prevFollowingUserTasks.some(
                (prevTask) => prevTask.id === task.id
              )
          );
          return [...prevFollowingUserTasks, ...filteredTasks];
        });
      }
    }
  }, [followingUserTasksData, followingUserTasksPage]);

  const handleFollowingUserTasksScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
      setFollowingUserTasksPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (activeTab === "followingUserTasks") {
      window.addEventListener("scroll", handleFollowingUserTasksScroll);
    }
    return () =>
      window.removeEventListener("scroll", handleFollowingUserTasksScroll);
  }, [activeTab]);

  // タスクリストのロード中ステータスを返す
  const getLoadingStatusByTab = (tab) => {
    if (tab === "followingUserTasks") {
      return followingUserTasksIsLoading || followingUserTasksIsFetching;
    }
    return false;
  };

  // タスクリストのエラーステータスを返す
  const getErrorStatusByTab = (tab) => {
    if (tab === "followingUserTasks") {
      return followingUserTasksError;
    }
    return null;
  };

  return {
    error: getErrorStatusByTab(activeTab),
    isLoading: getLoadingStatusByTab(activeTab),
    followingUserTasks,
  };
};
