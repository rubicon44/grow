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
  const { tasks } = props;
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
      tasks={tasks}
    />
  );
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
  tasks: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number,
        bio: PropTypes.string,
        email: PropTypes.string,
        nickname: PropTypes.string,
        username: PropTypes.string,
      }).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
