import { useEffect, useRef, useState } from "react";
import { useUserDataContext } from "../../context/UserDataContextProvider";
import { useCurrentUserId } from "../useCurrentUserId";
import { getTasks } from "../../infra/api";
import { useApiQuery } from "../../infra/api/hooks/useApiQuery";

export const useTasksData = (activeTab) => {
  const { userData } = useUserDataContext();
  const currentUserId = useCurrentUserId();
  const [tasks, setTasks] = useState([]);
  const [tasksPage, setTasksPage] = useState(1);
  const pageSize = 3;

  const {
    data: tasksData,
    error: tasksError,
    isLoading: tasksIsLoading,
    isFetching: tasksIsFetching,
  } = useApiQuery(["tasks", tasksPage, pageSize, userData], () =>
    getTasks({
      currentUserId,
      page: tasksPage,
      pageSize,
    })
  );

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
        setTasks((prevTasks) => {
          const filteredTasks = newTasks.filter(
            (task) => !prevTasks.some((prevTask) => prevTask.id === task.id)
          );
          return [...prevTasks, ...filteredTasks];
        });
      }
    }
  }, [tasksData, tasksPage]);

  const outerElementTasksRef = useRef(null);
  const handleScrollForTasks = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
      setTasksPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (tasksPage === 1) {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    // ユーザーのタスク一覧で無限スクロールした後の、タスク一覧ページのpage stateが2になるのを防ぐ。
    if (outerElementTasksRef.current) {
      if (activeTab === "tasks") {
        window.addEventListener("scroll", handleScrollForTasks);
      }
    }
    return () => {
      window.removeEventListener("scroll", handleScrollForTasks);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, outerElementTasksRef.current]);

  // タスクリストのロード中ステータスを返す
  const getLoadingStatusByTab = (tab) => {
    if (tab === "tasks") {
      return tasksIsLoading || tasksIsFetching;
    }
    return false;
  };

  // タスクリストのエラーステータスを返す
  const getErrorStatusByTab = (tab) => {
    if (tab === "tasks") {
      return tasksError;
    }
    return null;
  };

  return {
    error: getErrorStatusByTab(activeTab),
    isLoading: getLoadingStatusByTab(activeTab),
    outerElementTasksRef,
    tasks,
  };
};
