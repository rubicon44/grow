import { MainWithHeader } from '../MainWithHeader';
import { UserFollowingsListContainer } from '../../organisms/Users/UserFollowingsListContainer';

export const UserFollowingsTemplate = () => {
  return (
    <MainWithHeader>
      <UserFollowingsListContainer />
    </MainWithHeader>
  );
};