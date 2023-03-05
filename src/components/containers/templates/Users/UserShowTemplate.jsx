import { MainWithHeader } from '../mainWithHeader';
import { UserTasksListContainer } from '../../organisms/users/UserTasksListContainer';

export const UserShowTemplate = () => {
  return (
    <MainWithHeader>
      <UserTasksListContainer />
    </MainWithHeader>
  );
};