import { UserFollowers } from 'components/containers/organisms/Users/UserFollowersList/UserFollowers';

export const UserFollowersContainer = ({ currentUserId, error, followers, loading, username }) => {
  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return <UserFollowers
           currentUserId={currentUserId}
           followers={followers}
           username={username}
         />;
};