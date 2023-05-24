import PropTypes from "prop-types";
import { GanttChartContent } from "./GanttChartContent";

export const GanttChart = (props) => {
  const {
    calenderBodyHeight,
    calenders,
    elm,
    elmOfCalenderTableCover,
    handleBackToPreviousMonthClick,
    handleForwardToNextMonthClick,
    handleScrollToCurrentDate,
    styles,
  } = props;
  const { user, tasks } = props;
  return (
    <GanttChartContent
      calenderBodyHeight={calenderBodyHeight}
      calenders={calenders}
      elm={elm}
      elmOfCalenderTableCover={elmOfCalenderTableCover}
      handleBackToPreviousMonthClick={handleBackToPreviousMonthClick}
      handleForwardToNextMonthClick={handleForwardToNextMonthClick}
      handleScrollToCurrentDate={handleScrollToCurrentDate}
      styles={styles}
      user={user}
      tasks={tasks}
    />
  );
};

GanttChart.defaultProps = {
  user: null,
};

GanttChart.propTypes = {
  calenderBodyHeight: PropTypes.number.isRequired,
  calenders: PropTypes.arrayOf(
    PropTypes.exact({
      calender: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      days: PropTypes.arrayOf(
        PropTypes.exact({
          blockNumber: PropTypes.number.isRequired,
          day: PropTypes.number.isRequired,
          dayOfWeek: PropTypes.string.isRequired,
        })
      ),
      month: PropTypes.number.isRequired,
      startBlockNumber: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
    })
  ).isRequired,
  elm: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
  elmOfCalenderTableCover: PropTypes.objectOf(PropTypes.instanceOf(Element))
    .isRequired,
  handleBackToPreviousMonthClick: PropTypes.func.isRequired,
  handleForwardToNextMonthClick: PropTypes.func.isRequired,
  handleScrollToCurrentDate: PropTypes.func.isRequired,
  styles: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      left: PropTypes.string.isRequired,
      taskStatus: PropTypes.number.isRequired,
      top: PropTypes.string.isRequired,
      width: PropTypes.string.isRequired,
    })
  ).isRequired,
  user: PropTypes.exact({
    id: PropTypes.number.isRequired,
    bio: PropTypes.string,
    email: PropTypes.string.isRequired,
    likedTasks: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        userId: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        status: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        user: PropTypes.exact({
          bio: PropTypes.string,
          email: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
          nickname: PropTypes.string.isRequired,
          username: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
    nickname: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        userId: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        status: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
    username: PropTypes.string.isRequired,
  }),
  tasks: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
