import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { UserFollowersListContainer } from 'components/containers/organisms/Users/UserFollowersListContainer';

export const UserFollowersTemplate = () => {
  return (
    <MainWithHeader>
      <UserFollowersListContainer />
    </MainWithHeader>
  );
};