import { MainWithHeader } from '../mainWithHeader';
import { UserFollowersListContainer } from '../../organisms/users/userFollowersListContainer';

export const UserFollowersTemplate = () => {
  return (
    <MainWithHeader>
      <UserFollowersListContainer />
    </MainWithHeader>
  );
};