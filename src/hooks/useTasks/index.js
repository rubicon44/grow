import { useEffect, useState } from "react";
import { useCurrentUserId } from "../useCurrentUserId";
import { getTasks } from "../../infra/api";
import { useApiQuery } from "../../infra/api/hooks/useApiQuery";

export const useTasks = (activeTab) => {
  const currentUserId = useCurrentUserId();
  const [tasksPage, setTasksPage] = useState(1);
  const [followingUserTasksPage, setFollowingUserTasksPage] = useState(1);
  const pageSize = 3;

  const {
    data: tasksData,
    error: tasksError,
    isLoading: tasksIsLoading,
    isFetching: tasksIsFetching,
  } = useApiQuery(["tasks", tasksPage, pageSize], () =>
    getTasks({
      currentUserId,
      page: tasksPage,
      pageSize,
    })
  );

  const {
    data: followingUserTasksData,
    error: followingUserTasksError,
    isLoading: followingUserTasksIsLoading,
    isFetching: followingUserTasksIsFetching,
  } = useApiQuery(
    ["followingUserTasks", followingUserTasksPage, pageSize],
    () =>
      getTasks({
        currentUserId,
        page: followingUserTasksPage,
        pageSize,
      })
  );

  const [tasks, setTasks] = useState([]);
  const [followingUserTasks, setFollowingUserTasks] = useState([]);

  useEffect(() => {
    if (tasksData) {
      const newTasks =
        tasksData?.data?.tasks?.map((task) => ({
          ...task,
          id: task.id.toString(),
          userId: task.userId.toString(),
          user: {
            ...task.user,
            id: task.user.id.toString(),
          },
        })) || [];

      if (tasksPage === 1) {
        setTasks(newTasks);
      } else {
        setTasks((prevTasks) => [...prevTasks, ...newTasks]);
      }
    }
  }, [tasksData, tasksPage]);

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
        setFollowingUserTasks((prevFollowingUserTasks) => [
          ...prevFollowingUserTasks,
          ...newFollowingUserTasks,
        ]);
      }
    }
  }, [followingUserTasksData, followingUserTasksPage]);

  const handleTasksScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
      setTasksPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (activeTab === "tasks") {
      window.addEventListener("scroll", handleTasksScroll);
    }
    return () => window.removeEventListener("scroll", handleTasksScroll);
  }, [activeTab]);

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

  //  // タブごとのタスクリストを返す
  //  const getTasksByTab = (tab) => {
  //   if (tab === "tasks") {
  //     return tasks;
  //   } else if (tab === "followingUserTasks") {
  //     return followingUserTasks;
  //   }
  //   return [];
  // };

  // タスクリストのロード中ステータスを返す
  const getLoadingStatusByTab = (tab) => {
    if (tab === "tasks") {
      return tasksIsLoading || tasksIsFetching;
    }
    if (tab === "followingUserTasks") {
      return followingUserTasksIsLoading || followingUserTasksIsFetching;
    }
    return false;
  };

  // タスクリストのエラーステータスを返す
  const getErrorStatusByTab = (tab) => {
    if (tab === "tasks") {
      return tasksError;
    }
    if (tab === "followingUserTasks") {
      return followingUserTasksError;
    }
    return null;
  };

  return {
    // error,
    // isFetching,
    // isLoading,
    // tasks: getTasksByTab(activeTab),
    // // ...accumulatedData,
    error: getErrorStatusByTab(activeTab),
    isLoading: getLoadingStatusByTab(activeTab),
    tasks,
    followingUserTasks,
  };
};
