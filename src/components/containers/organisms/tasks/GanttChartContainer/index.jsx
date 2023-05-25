import { useGanttChart } from "../../../../../hooks/useGanttChart";
import { useUserData } from "../../../../../hooks/useUserData";
import { GanttChart } from "../GanttChart";

export const GanttChartContainer = () => {
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
  if (error) return <div>Error...</div>;
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
