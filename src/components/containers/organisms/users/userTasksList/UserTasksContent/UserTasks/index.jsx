import { UserTasksAlreadyPostList } from '../UserTasksAlreadyPostList';
import { UserTasksNoPostList } from '../UserTasksNoPostList';

export const UserTasks = ({ userData }) => {
  return (
    userData.userTasks.length === 0 ? (
      <UserTasksNoPostList userData={userData} />
    ) : (
      <UserTasksAlreadyPostList userData={userData} />
    )
  );
};