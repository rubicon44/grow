import { useEffect, useRef } from "react";

export const useInfiniteScrollForTasks = (
  activeTab,
  ganttChartScrollActive,
  setDataType,
  setTasksForUserDataPage,
  tasksForUserDataPage
) => {
  const outerElementTasksRef = useRef(null);
  const handleScrollForTasks = () => {
    const { scrollTop } = document.documentElement;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
      // 最下部にスクロールされ、データのロード中でない場合に次のページのデータを取得
      setTasksForUserDataPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (tasksForUserDataPage === 1) {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    // タスク一覧で無限スクロールした後の、ユーザー詳細ページのpage stateが2になるのを防ぐ。
    if (outerElementTasksRef.current) {
      if (!ganttChartScrollActive && activeTab === "createdTasks") {
        setDataType("tasks");
        window.addEventListener("scroll", handleScrollForTasks);
      }
    }
    return () => {
      window.removeEventListener("scroll", handleScrollForTasks);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ganttChartScrollActive, activeTab, outerElementTasksRef.current]);

  // useTasksDataとの競合を防ぐため名称を変更
  return { outerElementTasksRef };
};
