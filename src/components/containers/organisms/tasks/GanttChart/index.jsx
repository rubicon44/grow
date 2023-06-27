import PropTypes from "prop-types";
import styled from "styled-components";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { GanttChartTaskTable } from "./GanttChartTaskTable";

export const GanttChart = (props) => {
  const {
    calenderBodyHeight,
    calenders,
    elm,
    elmOfCalenderTableCover,
    handleBackToPreviousMonthClick,
    handleForwardToNextMonthClick,
    handleScrollToCurrentDate,
    outerElementGanttChartRef,
    styles,
  } = props;
  const { tasks } = props;
  return (
    <GanttChartCover>
      <ButtonCover>
        <ScrollButton type="button" onClick={handleScrollToCurrentDate}>
          今日の日付に移動
        </ScrollButton>
      </ButtonCover>
      <ArrowIconsGroup>
        <ArrowIconsCover>
          <ArrowBackIosOutlinedIcon onClick={handleBackToPreviousMonthClick}>
            前月へ
          </ArrowBackIosOutlinedIcon>
        </ArrowIconsCover>
        <ArrowIconsCover>
          <ArrowForwardIosIcon onClick={handleForwardToNextMonthClick}>
            次月へ
          </ArrowForwardIosIcon>
        </ArrowIconsCover>
      </ArrowIconsGroup>
      <GanttChartTaskTable
        calenderBodyHeight={calenderBodyHeight}
        calenders={calenders}
        elm={elm}
        elmOfCalenderTableCover={elmOfCalenderTableCover}
        outerElementGanttChartRef={outerElementGanttChartRef}
        styles={styles}
        tasks={tasks}
      />
    </GanttChartCover>
  );
};

GanttChart.defaultProps = {
  outerElementGanttChartRef: null,
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
  outerElementGanttChartRef: PropTypes.objectOf(PropTypes.instanceOf(Element)),
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
      id: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string,
        bio: PropTypes.string,
        email: PropTypes.string,
        nickname: PropTypes.string,
        username: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
};

const ArrowIconsCover = styled.span`
  cursor: pointer;
`;

const ArrowIconsGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonCover = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ScrollButton = styled.button`
  width: 125px;
  height: 40px;
  border: 1px solid #ddd;
  box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 8px,
    rgba(101, 119, 134, 0.25) 0px 1px 3px 1px;
  border-radius: 20px;
  color: rgb(255, 255, 255);
  background-color: rgb(29, 155, 240);
  cursor: pointer;
`;

const GanttChartCover = styled.div`
  margin: 20px 0 10px;
  border-bottom: 1px solid #ddd;
`;
