import { FollowingsList } from 'components/containers/organisms/Users/FollowingsList';
import { useFollowings } from 'hooks/useFollowings';

export const FollowingsListContainer = () => {
  const { followings, currentUserId, username } = useFollowings();
  return <FollowingsList followings={followings} currentUserId={currentUserId} username={username} />;
};