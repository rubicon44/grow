import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { useFollowers } from 'hooks/useFollowers';
import { UserFollowersList } from 'components/containers/organisms/Users/UserFollowersList';

export const UserFollowersListContainer = () => {
  const currentUserId = useCurrentUserId();
  const { error, followers, loading, username } = useFollowers();

  return <UserFollowersList
           currentUserId={currentUserId}
           error={error}
           followers={followers}
           loading={loading}
           username={username}
         />;
};