import { UserTasksAlreadyPostList } from 'components/containers/organisms/Users/UserTasksList/UserTasksContent/UserTasksAlreadyPostList';
import { UserTasksNoPostList } from 'components/containers/organisms/Users/UserTasksList/UserTasksContent/UserTasksNoPostList';

export const UserTasks = ({ userData }) => {
  return (
    userData.userTasks.length === 0 ? (
      <UserTasksNoPostList userData={userData} />
    ) : (
      <UserTasksAlreadyPostList userData={userData} />
    )
  );
};