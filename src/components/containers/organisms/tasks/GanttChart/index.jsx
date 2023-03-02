import styled from 'styled-components';
import { GanttChartContent } from './GanttChartContent';
import { TitleWithBackArrowHeader } from '../../../../presentational/molecules/Header/TitleWithBackArrowHeader';

export const GanttChart = (props) => {
  const { calenderBodyHeight, calenders, elm, elmOfCalenderTableCover, handleBackToPreviousMonthClick, handleForwardToNextMonthClick, handleScrollToCurrentDate, styles } = props;
  const { taskUser, userTasks } = props;
  return (
    <>
      <GanttChartHeader>
        <TitleWithBackArrowHeader>ガントチャート</TitleWithBackArrowHeader>
      </GanttChartHeader>
      <GanttChartContent
        calenderBodyHeight={calenderBodyHeight}
        calenders={calenders}
        elm={elm}
        elmOfCalenderTableCover={elmOfCalenderTableCover}
        handleBackToPreviousMonthClick={handleBackToPreviousMonthClick}
        handleForwardToNextMonthClick={handleForwardToNextMonthClick}
        handleScrollToCurrentDate={handleScrollToCurrentDate}
        styles={styles}
        taskUser={taskUser}
        userTasks={userTasks}
      />
    </>
  );
};

const GanttChartHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 260px;
  padding: 30px 10px;
  text-align: center;
  background-color: #f8f7f3;
`;