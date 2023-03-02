import styled from 'styled-components';
import { TaskStatusSwitchText } from '../../TaskStatusSwitchText';

export const GanttChartTaskTable = ({ elm, taskUser, userTasks }) => {
  return (
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
        {userTasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.start_date}</td>
            <td>{task.end_date}</td>
            <td>{taskUser.nickname}</td>
            <td>
              <TaskStatusSwitchText taskStatus={task.status} />
            </td>
          </tr>
        ))}
      </GanttChartTaskList>
    </>
  );
};

const GanttChartTaskList = styled.tbody`
  background-color: #f8f7f3;
  > tr, td {
    height: 80px;
  }
`;

const GanttChartTaskTitle = styled.thead`
  position: sticky;
  top: 0;
  height: 50px;
  background: #ed8077;
`;