import { UserFollowingsList } from 'components/containers/organisms/Users/UserFollowingsList';
import { useFollowings } from 'hooks/useFollowings';

export const UserFollowingsListContainer = () => {
  const { currentUserId, error, followings, loading, username } = useFollowings();

  return <UserFollowingsList
           currentUserId={currentUserId}
           error={error}
           followings={followings}
           laoding={loading}
           username={username}
         />;
};