import { MainWithHeader } from '../mainWithHeader';
import { UserFollowersListContainer } from '../../organisms/users/UserFollowersListContainer';

export const UserFollowersTemplate = () => {
  return (
    <MainWithHeader>
      <UserFollowersListContainer />
    </MainWithHeader>
  );
};