import React from 'react';
import { useLocation } from 'react-router-dom';
import { UserGunttTemplate } from '../../templates/users/guntt';

export function UserGuntt() {
  // userShowページからなstateを流し込まれるだけでなく、gunttのpageで直接taskUser、userTasksをAPI取得した方が良い。
  // なぜなら、このページに直接アクセスした場合、taskUserとuserTasksが空になるため。

  //todo: location.stateを使用するのは正しいのだろうか。
  const location = useLocation();
  const { taskUser } = location.state;
  const { userTasks } = location.state;
  return (
    <UserGunttTemplate
      taskUser={taskUser}
      userTasks={userTasks}
    />
  );
}