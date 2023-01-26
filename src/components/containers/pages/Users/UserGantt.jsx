import { useLocation } from 'react-router-dom';
import { UserGanttTemplate } from 'components/containers/templates/Users/UserGanttTemplate';

export const UserGantt = () => {
  // userShowページからなstateを流し込まれるだけでなく、ganttのpageで直接taskUser、userTasksをAPI取得した方が良い。
  // なぜなら、このページに直接アクセスした場合、taskUserとuserTasksが空になるため。

  //todo: location.stateを使用するのは正しいのだろうか。
  const location = useLocation();
  const { taskUser } = location.state;
  const { userTasks } = location.state;
  return (
    <UserGanttTemplate
      taskUser={taskUser}
      userTasks={userTasks}
    />
  );
};