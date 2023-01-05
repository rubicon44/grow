import { FollowingsList } from 'components/containers/organisms/Users/FollowingsList';
import { useFollowings } from 'hooks/useFollowings';

export const FollowingsListContainer = () => {
  const { followings, currentUserId, userId } = useFollowings();
  return <FollowingsList followings={followings} currentUserId={currentUserId} userId={userId} />;
};