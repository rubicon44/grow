import { MainWithHeader } from '../mainWithHeader';
import { UserFollowingsListContainer } from '../../organisms/users/UserFollowingsListContainer';

export const UserFollowingsTemplate = () => {
  return (
    <MainWithHeader>
      <UserFollowingsListContainer />
    </MainWithHeader>
  );
};