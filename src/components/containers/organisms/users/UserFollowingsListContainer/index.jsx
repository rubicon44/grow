import { useCurrentUserId } from '../../../../../hooks/useCurrentUserId';
import { useFollowings } from '../../../../../hooks/useFollowings';
import { UserFollowingsList } from '../userFollowingsList';

export const UserFollowingsListContainer = () => {
  const currentUserId = useCurrentUserId();
  const { error, followings, loading, username } = useFollowings();

  return <UserFollowingsList
           currentUserId={currentUserId}
           error={error}
           followings={followings}
           laoding={loading}
           username={username}
         />;
};