import PropTypes from "prop-types";
import styled from "styled-components";
import { TaskStatusSwitchText } from "../../TaskStatusSwitchText";

export const GanttChartTaskTable = ({ elm, user, tasks }) => (
  <>
    <GanttChartTaskTitle>
      <tr>
        <th>タスク</th>
        <th>開始日</th>
        <th>終了日</th>
        <th>担当</th>
        <th>進捗</th>
      </tr>
    </GanttChartTaskTitle>
    <GanttChartTaskList ref={elm}>
      {tasks.map((task) => (
        <tr key={task.id}>
          <td>{task.title}</td>
          <td>{task.startDate}</td>
          <td>{task.endDate}</td>
          <td>{user.nickname}</td>
          <td>
            <TaskStatusSwitchText taskStatus={task.status} />
          </td>
        </tr>
      ))}
    </GanttChartTaskList>
  </>
);

GanttChartTaskTable.defaultProps = {
  user: null,
};

GanttChartTaskTable.propTypes = {
  elm: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
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
