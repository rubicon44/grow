import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { UserTasksListContainer } from 'components/containers/organisms/Users/UserTasksList/UserTasksListContainer';

export const UserShowTemplate = () => {
  return (
    <MainWithHeader>
      <UserTasksListContainer />
    </MainWithHeader>
  );
};