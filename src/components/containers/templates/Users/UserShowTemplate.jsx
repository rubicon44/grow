import { MainWithHeader } from '../mainWithHeader';
import { UserTasksListContainer } from '../../organisms/users/userTasksListContainer';

export const UserShowTemplate = () => {
  return (
    <MainWithHeader>
      <UserTasksListContainer />
    </MainWithHeader>
  );
};