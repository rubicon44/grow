import { useEffect, useRef, useState } from "react";
import { useCurrentPathSegment } from "../useCurrentPathSegment";
import { getUser } from "../../infra/api";

export const useUserData = (activeTab) => {
  const { currentPathSegment } = useCurrentPathSegment();
  const [checkUserNameChange, setCheckUserNameChange] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const [dataType, setDataType] = useState("default");
  const [tasksPage, setTasksPage] = useState(1);
  const [likedTasksPage, setLikedTasksPage] = useState(1);
  const pageSize = 3;

  const handleSuccessForDefault = (userData) => {
    const { likedTasks, ...newUserData } = userData;
    const newDataWithLikedTasksKey = { ...newUserData, likedTasks };
    setUserData((prevUserData) => {
      if (prevUserData) {
        // 重複を避けるために、新しいタスクを追加する前に重複をフィルタリング
        const filteredLikedTasks = newDataWithLikedTasksKey.likedTasks.filter(
          (newTask) =>
            prevUserData &&
            prevUserData.likedTasks &&
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
          likedTasks: prevUserData.likedTasks
            ? [...prevUserData.likedTasks, ...filteredLikedTasks]
            : filteredLikedTasks,
          tasks: prevUserData.tasks
            ? [...prevUserData.tasks, ...filteredTasks]
            : filteredTasks,
        };
      }
      return newDataWithLikedTasksKey;
    });
  };

  const handleSuccessForTasks = (userData) => {
    const { ...newUserData } = userData;
    const newDataWithTasksKey = { ...newUserData };
    setUserData((prevUserData) => {
      if (prevUserData) {
        const filteredTasks = newDataWithTasksKey.tasks.filter(
          (newTask) =>
            !prevUserData.tasks.find(
              (existingTask) => existingTask.id === newTask.id
            )
        );

        const updatedTasks = prevUserData.tasks.map((existingTask) => {
          const matchingTask = newDataWithTasksKey.tasks.find(
            (newTask) => newTask.id === existingTask.id
          );
          return matchingTask || existingTask;
        });

        return {
          ...prevUserData,
          ...newDataWithTasksKey,
          tasks: [...updatedTasks, ...filteredTasks],
        };
      }
      return newDataWithTasksKey;
    });
  };

  const handleSuccessForLikedTasks = (userData) => {
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

        const updatedLikedTasks = prevUserData.likedTasks.map(
          (existingTask) => {
            const matchingTask = newDataWithLikedTasksKey.likedTasks.find(
              (newTask) => newTask.id === existingTask.id
            );
            return matchingTask || existingTask;
          }
        );

        const updatedTasks = prevUserData.tasks.map((task) => {
          const updatedTaskUser =
            updatedLikedTasks.find((likedTask) => likedTask.id === task.id)
              ?.user || task.user;
          return {
            ...task,
            user: updatedTaskUser,
          };
        });

        return {
          ...prevUserData,
          ...newDataWithLikedTasksKey,
          likedTasks: [...prevUserData.likedTasks, ...filteredLikedTasks],
          tasks: updatedTasks,
        };
      }
      return newDataWithLikedTasksKey;
    });
  };

  const fetchUserData = async (currentPathSegment) => {
    setLoading(true);
    setError(null);

    try {
      const response = await getUser(
        currentPathSegment,
        dataType,
        dataType === "tasks" ? tasksPage : likedTasksPage,
        pageSize
      );
      const userData = response.data;

      if (dataType === "default") {
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
        handleSuccessForDefault(transformedUserData);
      }
      if (dataType === "tasks") {
        const transformedUserData = {
          ...userData,
          id: userData.id.toString(),
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
        handleSuccessForTasks(transformedUserData);
      }
      if (dataType === "likedTasks") {
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
        };
        handleSuccessForLikedTasks(transformedUserData);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setCheckUserNameChange(false);
    }
  };

  useEffect(() => {
    fetchUserData(currentPathSegment, dataType, tasksPage, likedTasksPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    checkUserNameChange,
    currentPathSegment,
    tasksPage,
    likedTasksPage,
    dataType,
    // fetchUserData,
  ]);

  useEffect(() => {
    if (userData && userData.tasks) {
      const updatedTasks = userData.tasks.map((task) => {
        if (task.user && task.user.nickname !== userData.nickname) {
          return {
            ...task,
            user: {
              ...task.user,
              nickname: userData.nickname,
            },
          };
        }
        return task;
      });

      // 現在のuserDataと新しいuserDataが異なる場合のみsetUserDataを呼び出す
      if (JSON.stringify(updatedTasks) !== JSON.stringify(userData.tasks)) {
        setUserData((prevUserData) => {
          if (prevUserData) {
            return {
              ...prevUserData,
              tasks: updatedTasks,
            };
          }
          return prevUserData;
        });
      }
    }

    if (userData && userData.likedTasks) {
      const updatedTasks = userData.likedTasks.map((task) => {
        if (task.user && task.user.nickname !== userData.nickname) {
          return {
            ...task,
            user: {
              ...task.user,
              nickname: userData.nickname,
            },
          };
        }
        return task;
      });

      // 現在のuserDataと新しいuserDataが異なる場合のみsetUserDataを呼び出す
      if (
        JSON.stringify(updatedTasks) !== JSON.stringify(userData.likedTasks)
      ) {
        setUserData((prevUserData) => {
          if (prevUserData) {
            return {
              ...prevUserData,
              likedTasks: updatedTasks,
            };
          }
          return prevUserData;
        });
      }
    }
  }, [userData]);

  const [scrollHeight, setScrollHeight] = useState(1); // ページ番号
  const [ganttChartScrollActive, setGanttChartScrollActive] = useState(false);

  const outerElementRef = useRef(null);
  // TODO: useEffect内に内含するか検討(可読性を考慮)。
  const handleScrollForGanttChart = () => {
    const outerElement = outerElementRef.current;
    const { scrollTop } = outerElement;
    const { scrollHeight } = outerElement;
    const { clientHeight } = outerElement;
    setScrollHeight(scrollHeight);

    if (scrollTop + clientHeight >= scrollHeight) {
      // 最下部にスクロールされ、データのロード中でない場合に次のページのデータを取得
      setTasksPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const outerElement = outerElementRef.current;
    if (outerElement) {
      setGanttChartScrollActive(true);
      setDataType("tasks");
      outerElement.addEventListener("scroll", handleScrollForGanttChart);
    }

    return () => {
      if (outerElement) {
        outerElement.removeEventListener("scroll", handleScrollForGanttChart);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outerElementRef.current]);

  const outerElementTasksRef = useRef(null);
  const handleScrollForTasks = () => {
    const { scrollTop } = document.documentElement;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
      // 最下部にスクロールされ、データのロード中でない場合に次のページのデータを取得
      setTasksPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    // タスク一覧で無限スクロールした後の、ユーザー詳細ページのpage stateが2になるのを防ぐ。
    if (outerElementTasksRef.current) {
      if (!ganttChartScrollActive && activeTab !== "tasks") {
        setDataType("tasks");
        window.addEventListener("scroll", handleScrollForTasks);
      }
    }
    return () => window.removeEventListener("scroll", handleScrollForTasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ganttChartScrollActive, activeTab, outerElementTasksRef.current]);

  const handleScrollForLikedTasks = () => {
    const { scrollTop } = document.documentElement;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
      setLikedTasksPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (activeTab === "likedTasks") {
      setDataType("likedTasks");
      window.addEventListener("scroll", handleScrollForLikedTasks);
    }

    return () => {
      window.removeEventListener("scroll", handleScrollForLikedTasks);
    };
  }, [activeTab]);

  return {
    error,
    loading,
    outerElementRef,
    outerElementTasksRef,
    scrollHeight,
    setCheckUserNameChange,
    setUserData,
    userData,
    currentPathSegment,
  };
};
