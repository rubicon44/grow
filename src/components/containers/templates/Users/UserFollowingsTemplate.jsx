import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { UserFollowingsListContainer } from 'components/containers/organisms/Users/UserFollowingsListContainer';

export const UserFollowingsTemplate = () => {
  return (
    <MainWithHeader>
      <UserFollowingsListContainer />
    </MainWithHeader>
  );
};