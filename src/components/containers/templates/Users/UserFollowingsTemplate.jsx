import { MainWithHeader } from '../MainWithHeader';
import { UserFollowingsListContainer } from '../../organisms/users/UserFollowingsListContainer';

export const UserFollowingsTemplate = () => {
  return (
    <MainWithHeader>
      <UserFollowingsListContainer />
    </MainWithHeader>
  );
};