import { MainWithHeader } from '../MainWithHeader';
import { UserTasksListContainer } from '../../organisms/Users/UserTasksListContainer';

export const UserShowTemplate = () => {
  return (
    <MainWithHeader>
      <UserTasksListContainer />
    </MainWithHeader>
  );
};