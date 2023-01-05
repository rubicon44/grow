import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { FollowersListContainer } from 'components/containers/organisms/Users/FollowersList/FollowersListContainer';

export const UserFollowersTemplate = () => {
  return (
    <MainWithHeader>
      <FollowersListContainer />
    </MainWithHeader>
  );
};