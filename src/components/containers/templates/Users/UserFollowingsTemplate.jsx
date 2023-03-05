import { MainWithHeader } from '../mainWithHeader';
import { UserFollowingsListContainer } from '../../organisms/users/userFollowingsListContainer';

export const UserFollowingsTemplate = () => {
  return (
    <MainWithHeader>
      <UserFollowingsListContainer />
    </MainWithHeader>
  );
};