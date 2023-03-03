import styled from 'styled-components';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { mediaquery } from '../../../../../../assets/styles/variable';
import { GanttChartCalenderTableWithTaskBar } from '../GanttChartContent/GanttChartCalenderTableWithTaskBar';
import { GanttChartTaskTable } from '../GanttChartContent/GanttChartTaskTable';

export const GanttChartContent = (props) => {
  const { calenderBodyHeight, calenders, elm, elmOfCalenderTableCover, handleBackToPreviousMonthClick, handleForwardToNextMonthClick, handleScrollToCurrentDate, styles } = props;
  const { taskUser, userTasks } = props;
  return (
    <>
      <button onClick={handleScrollToCurrentDate}>今日の日付に移動</button>
      <ArrowIconsCover>
        <ArrowBackIosOutlinedIcon onClick={handleBackToPreviousMonthClick}>前月へ</ArrowBackIosOutlinedIcon>
        <ArrowForwardIosIcon onClick={handleForwardToNextMonthClick}>次月へ</ArrowForwardIosIcon>
      </ArrowIconsCover>
      <GanttChartTaskAndCalenderTables id="outer">
        <GanttChartTaskTableCover>
          <GanttChartTaskTable
            elm={elm}
            taskUser={taskUser}
            userTasks={userTasks}
          />
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
  z-index: 30;
  border: 1px solid;
  > thead, tbody {
    border: 1px solid;
    > tr > th, td {
      border: 1px solid;
      box-sizing: border-box;
    }
  }
`;