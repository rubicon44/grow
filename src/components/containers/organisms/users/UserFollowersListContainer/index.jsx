import { useFollowers } from 'hooks/useFollowers';
import { UserFollowersList } from 'components/containers/organisms/Users/UserFollowersList';

export const UserFollowersListContainer = () => {
  const { currentUserId, error, followers, loading, username } = useFollowers();

  return <UserFollowersList
           currentUserId={currentUserId}
           error={error}
           followers={followers}
           loading={loading}
           username={username}
         />;
};