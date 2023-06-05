import PropTypes from "prop-types";
import styled from "styled-components";
import { TaskStatusSwitchText } from "../TaskStatusSwitchText";

export const GanttChartTaskTable = ({ elm, tasks }) => (
  <>
    <GanttChartTaskTitle>
      <tr>
        {/* todo: sp画面の時、タスク幅が広く、チャート部分の表示が狭い。 */}
        <th>タスク</th>
        <th>開始日</th>
        <th>終了日</th>
        <th>進捗</th>
      </tr>
    </GanttChartTaskTitle>
    <GanttChartTaskList ref={elm}>
      {tasks.map((task) => (
        <tr key={task.id}>
          <td>{task.title}</td>
          <td>{task.startDate}</td>
          <td>{task.endDate}</td>
          <td>
            <TaskStatusSwitchText taskStatus={task.status} />
          </td>
        </tr>
      ))}
    </GanttChartTaskList>
  </>
);

GanttChartTaskTable.propTypes = {
  elm: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
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

const GanttChartTaskList = styled.tbody`
  background-color: #f8f7f3;
  > tr,
  td {
    height: 80px;
  }
`;

const GanttChartTaskTitle = styled.thead`
  position: sticky;
  top: 0;
  height: 50px;
  background: #ed8077;
`;
