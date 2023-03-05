import { useGanttChart } from '../../../../../hooks/useGanttChart';
import { GanttChart } from '../GanttChart';

export const GanttChartContainer = (props) => {
  const { taskUser, userTasks } = props;
  const { calenderBodyHeight, calenders, elm, elmOfCalenderTableCover, getItemSize, handleBackToPreviousMonthClick, handleForwardToNextMonthClick, handleScrollToCurrentDate, styles } = useGanttChart(userTasks);
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
      taskUser={taskUser}
      userTasks={userTasks}
    />
  );
};