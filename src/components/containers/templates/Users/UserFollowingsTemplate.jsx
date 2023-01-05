import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { FollowingsListContainer } from 'components/containers/organisms/Users/FollowingsList/FollowingsListContainer';

export const UserFollowingsTemplate = () => {
  return (
    <MainWithHeader>
      <FollowingsListContainer />
    </MainWithHeader>
  );
};