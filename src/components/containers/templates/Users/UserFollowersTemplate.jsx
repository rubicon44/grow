import { MainWithHeader } from '../MainWithHeader';
import { UserFollowersListContainer } from '../../organisms/Users/UserFollowersListContainer';

export const UserFollowersTemplate = () => {
  return (
    <MainWithHeader>
      <UserFollowersListContainer />
    </MainWithHeader>
  );
};