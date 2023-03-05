import { UserTasksAlreadyPostList } from '../userTasksAlreadyPostList';
import { UserTasksNoPostList } from '../userTasksNoPostList';

export const UserTasks = ({ userData }) => {
  return (
    userData.userTasks.length === 0 ? (
      <UserTasksNoPostList userData={userData} />
    ) : (
      <UserTasksAlreadyPostList userData={userData} />
    )
  );
};