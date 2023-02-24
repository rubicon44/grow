import { UserTasks } from 'components/containers/organisms/Users/UserTasksList/UserTasksContent/UserTasks';

export const UserTasksContainer = ({ error, loading, userData }) => {
  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return <UserTasks userData={userData} />;
};