import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaquery } from "../../../../../../assets/styles/variable";
import { GanttChartCalenderTableWithTaskBar } from "../GanttChartCalenderTableWithTaskBar";

export const GanttChartTaskTable = ({
  calenderBodyHeight,
  calenders,
  elm,
  elmOfCalenderTableCover,
  outerElementGanttChartRef,
  styles,
  tasks,
}) => (
  <GanttChartTaskAndCalenderTables id="outer" ref={outerElementGanttChartRef}>
    <GanttChartTaskTableCover>
      <GanttChartTaskTitle>
        <tr>
          <TaskTh>タスク</TaskTh>
          <DateTh>開始日</DateTh>
          <DateTh>終了日</DateTh>
        </tr>
      </GanttChartTaskTitle>
      <GanttChartTaskList ref={elm}>
        {tasks.map((task) => (
          <tr key={task.id}>
            <TaskTd>{task.title}</TaskTd>
            <DateTd>{task.startDate}</DateTd>
            <DateTd>{task.endDate}</DateTd>
          </tr>
        ))}
      </GanttChartTaskList>
    </GanttChartTaskTableCover>
    <GanttChartCalenderTableWithTaskBarCover ref={elmOfCalenderTableCover}>
      <GanttChartCalenderTableWithTaskBar
        calenderBodyHeight={calenderBodyHeight}
        calenders={calenders}
        styles={styles}
      />
    </GanttChartCalenderTableWithTaskBarCover>
  </GanttChartTaskAndCalenderTables>
);

GanttChartTaskTable.defaultProps = {
  outerElementGanttChartRef: null,
};

GanttChartTaskTable.propTypes = {
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
        avatarUrl: PropTypes.string,
        bio: PropTypes.string,
        email: PropTypes.string,
        nickname: PropTypes.string,
        username: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
};

const GanttChartTaskList = styled.tbody`
  background-color: #f8f7f3;
  > tr > td {
    height: 80px;
    padding: 2px;
  }
`;

const GanttChartTaskTitle = styled.thead`
  position: sticky;
  top: 0;
  height: 50px;
  background: #ed8077;
  > tr > th {
    height: 52px;
    padding: 2px;
  }
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
  > thead {
    text-align: center;
  }
  > thead,
  tbody {
    > tr > th,
    td {
      border: 1px solid;
      box-sizing: border-box;
    }
  }
`;

const TaskTh = styled.th`
  min-width: 50px;
  max-width: 50px;
`;

const TaskTd = styled.td`
  overflow: scroll;
  min-width: 50px;
  max-width: 50px;
`;

const DateTh = styled.th`
  min-width: 43px;
  max-width: 50px;
`;

const DateTd = styled.td`
  min-width: 43px;
  max-width: 50px;
`;
