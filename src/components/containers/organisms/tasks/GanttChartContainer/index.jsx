import { useGanttChart } from "../../../../../hooks/useGanttChart";
import { useGetErrorMessage } from "../../../../../hooks/useGetErrorMessage";
import { useUserData } from "../../../../../hooks/useUserData";
import { ErrorMessage } from "../../common/ErrorMessage";
import { GanttChart } from "../GanttChart";

export const GanttChartContainer = () => {
  const { getErrorMessage } = useGetErrorMessage();
  const { loading, error, userData } = useUserData();
  const {
    calenderBodyHeight,
    calenders,
    elm,
    elmOfCalenderTableCover,
    getItemSize,
    handleBackToPreviousMonthClick,
    handleForwardToNextMonthClick,
    handleScrollToCurrentDate,
    styles,
  } = useGanttChart(userData?.tasks ?? [], loading);

  if (error) return <ErrorMessage errorMessage={getErrorMessage(error)} />;
  if (userData === null) {
    return null;
  }
  return (
    <GanttChart
      calenderBodyHeight={calenderBodyHeight}
      calenders={calenders}
      elm={elm}
      elmOfCalenderTableCover={elmOfCalenderTableCover}
      getItemSize={getItemSize}
      handleBackToPreviousMonthClick={handleBackToPreviousMonthClick}
      handleForwardToNextMonthClick={handleForwardToNextMonthClick}
      handleScrollToCurrentDate={handleScrollToCurrentDate}
      styles={styles}
      tasks={userData.tasks}
    />
  );
};
