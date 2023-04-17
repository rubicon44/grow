import PropTypes from 'prop-types';
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

GanttChart.propTypes = {
  calenderBodyHeight: PropTypes.number.isRequired,
  calenders: PropTypes.arrayOf(PropTypes.exact({
    calender: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    days: PropTypes.arrayOf(PropTypes.exact({
      blockNumber: PropTypes.number.isRequired,
      day: PropTypes.number.isRequired,
      dayOfWeek: PropTypes.string.isRequired,
    })),
    month: PropTypes.number.isRequired,
    startBlockNumber: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
  })).isRequired,
  elm: PropTypes.object.isRequired,
  elmOfCalenderTableCover: PropTypes.object.isRequired,
  handleBackToPreviousMonthClick: PropTypes.func.isRequired,
  handleForwardToNextMonthClick: PropTypes.func.isRequired,
  handleScrollToCurrentDate: PropTypes.func.isRequired,
  styles: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
    taskStatus: PropTypes.number.isRequired,
    top: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  })).isRequired,
  taskUser: PropTypes.exact({
    id: PropTypes.number.isRequired,
    firebase_id: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string.isRequired,
    like_tasks: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.number.isRequired,
      user_id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      end_date: PropTypes.string.isRequired,
      start_date: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
    nickname: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.number.isRequired,
      user_id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      end_date: PropTypes.string.isRequired,
      start_date: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
    username: PropTypes.string.isRequired,
  }),
  userTasks: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
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