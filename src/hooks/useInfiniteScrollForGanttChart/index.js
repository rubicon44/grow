import { useEffect, useRef } from "react";

export const useInfiniteScrollForGanttChart = (
  setDataType,
  setGanttChartScrollActive,
  setTasksForUserDataPage
) => {
  const outerElementGanttChartRef = useRef(null);

  const handleScrollForGanttChart = () => {
    const outerElement = outerElementGanttChartRef.current;
    const { scrollTop } = outerElement;
    const { scrollHeight } = outerElement;
    const { clientHeight } = outerElement;

    if (scrollTop + clientHeight >= scrollHeight) {
      // 最下部にスクロールされ、データのロード中でない場合に次のページのデータを取得
      setTasksForUserDataPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const outerElement = outerElementGanttChartRef.current;
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
  }, [outerElementGanttChartRef.current]);

  return outerElementGanttChartRef;
};
