import { UserFollowings } from 'components/containers/organisms/Users/UserFollowingsList/UserFollowings';

export const UserFollowingsContainer = ({ currentUserId, error, followings, loading, username }) => {
  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return <UserFollowings
           currentUserId={currentUserId}
           followings={followings}
           username={username}
         />;
};