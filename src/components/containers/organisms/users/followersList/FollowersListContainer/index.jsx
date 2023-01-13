import { useFollowers } from 'hooks/useFollowers';
import { FollowersList } from 'components/containers/organisms/Users/FollowersList';

export const FollowersListContainer = () => {
  const { followers, currentUserId, username } = useFollowers();
  return <FollowersList followers={followers} currentUserId={currentUserId} username={username} />;
};