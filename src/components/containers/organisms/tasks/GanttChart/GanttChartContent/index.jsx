import PropTypes from "prop-types";
import styled from "styled-components";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { mediaquery } from "../../../../../../assets/styles/variable";
import { GanttChartCalenderTableWithTaskBar } from "./GanttChartCalenderTableWithTaskBar";
import { GanttChartTaskTable } from "./GanttChartTaskTable";

export const GanttChartContent = (props) => {
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
    <>
      <button type="button" onClick={handleScrollToCurrentDate}>
        今日の日付に移動
      </button>
      <ArrowIconsCover>
        <ArrowBackIosOutlinedIcon onClick={handleBackToPreviousMonthClick}>
          前月へ
        </ArrowBackIosOutlinedIcon>
        <ArrowForwardIosIcon onClick={handleForwardToNextMonthClick}>
          次月へ
        </ArrowForwardIosIcon>
      </ArrowIconsCover>
      <GanttChartTaskAndCalenderTables id="outer">
        <GanttChartTaskTableCover>
          <GanttChartTaskTable elm={elm} user={user} tasks={tasks} />
        </GanttChartTaskTableCover>
        <GanttChartCalenderTableWithTaskBarCover ref={elmOfCalenderTableCover}>
          <GanttChartCalenderTableWithTaskBar
            calenderBodyHeight={calenderBodyHeight}
            calenders={calenders}
            styles={styles}
          />
        </GanttChartCalenderTableWithTaskBarCover>
      </GanttChartTaskAndCalenderTables>
    </>
  );
};

GanttChartContent.defaultProps = {
  user: null,
};

GanttChartContent.propTypes = {
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
    ),
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

const ArrowIconsCover = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GanttChartTaskAndCalenderTables = styled.div`
  display: flex;
  max-height: 450px;
  overflow-y: scroll;
`;

const GanttChartCalenderTableWithTaskBarCover = styled.div`
  position: relative;
  display: flex;
  ${mediaquery.desktop`
    width: 1500px;
  `}
`;

const GanttChartTaskTableCover = styled.table`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  border: 1px solid;
  > thead {
    text-align: center;
  }
  > thead,
  tbody {
    border: 1px solid;
    > tr > th,
    td {
      border: 1px solid;
      box-sizing: border-box;
    }
  }
`;
