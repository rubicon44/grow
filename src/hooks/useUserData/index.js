import { useEffect, useState } from "react";
import { useUserDataContext } from "../../context/UserDataContextProvider";
import { useCurrentPathSegment } from "../useCurrentPathSegment";
import { useHandleSuccessForUserData } from "../useHandleSuccessForUserData";
import { useInfiniteScrollForGanttChart } from "../useInfiniteScrollForGanttChart";
import { useInfiniteScrollForLikedTasks } from "../useInfiniteScrollForLikedTasks";
import { useInfiniteScrollForTasks } from "../useInfiniteScrollForTasks";
import { useUpdateUserData } from "../useUpdateUserData";
import { useUserDataTransformation } from "../useUserDataTransformation";
import { getUser } from "../../infra/api";

export const useUserData = (activeTab) => {
  const { currentPathSegment } = useCurrentPathSegment();
  const [checkUserNameChange, setCheckUserNameChange] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userData, setUserData } = useUserDataContext();
  const {
    handleSuccessForDefault,
    handleSuccessForTasks,
    handleSuccessForLikedTasks,
  } = useHandleSuccessForUserData(setUserData);
  const {
    handleTransformedUserDataForDefault,
    handleTransformedUserDataForTasks,
    handleTransformedUserDataForLikedTasks,
  } = useUserDataTransformation();

  const [dataType, setDataType] = useState("default");
  const [tasksForUserDataPage, setTasksForUserDataPage] = useState(1);
  const [likedTasksPage, setLikedTasksPage] = useState(1);
  const pageSize = 3;

  const [scrollHeight, setScrollHeight] = useState(1); // ページ番号
  const [ganttChartScrollActive, setGanttChartScrollActive] = useState(false);

  useEffect(() => {
    setTasksForUserDataPage(1);
  }, [currentPathSegment]);

  useUpdateUserData(userData, setUserData);

  const outerElementGanttChartRef = useInfiniteScrollForGanttChart(
    setDataType,
    setGanttChartScrollActive,
    setScrollHeight,
    setTasksForUserDataPage
  );

  const { outerElementTasksRef } = useInfiniteScrollForTasks(
    activeTab,
    ganttChartScrollActive,
    setDataType,
    setTasksForUserDataPage,
    tasksForUserDataPage
  );

  useInfiniteScrollForLikedTasks(activeTab, setDataType, setLikedTasksPage);

  const fetchUserData = async (currentPathSegment) => {
    setLoading(true);
    setError(null);

    try {
      const response = await getUser(
        currentPathSegment,
        dataType,
        dataType === "tasks" ? tasksForUserDataPage : likedTasksPage,
        pageSize
      );
      const userData = response.data;

      if (dataType === "default") {
        const transformedUserData =
          handleTransformedUserDataForDefault(userData);
        handleSuccessForDefault(transformedUserData);
      }
      if (dataType === "tasks") {
        const transformedUserData = handleTransformedUserDataForTasks(userData);
        handleSuccessForTasks(transformedUserData);
      }
      if (dataType === "likedTasks") {
        const transformedUserData =
          handleTransformedUserDataForLikedTasks(userData);
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
    fetchUserData(
      currentPathSegment,
      dataType,
      tasksForUserDataPage,
      likedTasksPage
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    checkUserNameChange,
    currentPathSegment,
    tasksForUserDataPage,
    likedTasksPage,
    dataType,
    // fetchUserData,
  ]);

  return {
    error,
    loading,
    outerElementGanttChartRef,
    outerElementTasksRef,
    scrollHeight,
    setCheckUserNameChange,
    userData,
    currentPathSegment,
  };
};
