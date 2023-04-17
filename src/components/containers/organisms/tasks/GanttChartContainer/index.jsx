import PropTypes from 'prop-types';
import { useGanttChart } from '../../../../../hooks/useGanttChart';
import { GanttChart } from '../GanttChart';

export const GanttChartContainer = ({ taskUser, userTasks }) => {
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

GanttChartContainer.propTypes = {
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
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    })).isRequired,
    nickname: PropTypes.string.isRequired,
    password_digest: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.number.isRequired,
      user_id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      end_date: PropTypes.string.isRequired,
      start_date: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    })).isRequired,
    username: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
  }),
  userTasks: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
  })).isRequired,
};