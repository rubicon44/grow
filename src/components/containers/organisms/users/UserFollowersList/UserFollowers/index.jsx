import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FollowButtonForUsersListSwitchContainer } from 'components/containers/organisms/Users/UserButton/FollowButtonForUsersListSwitch/FollowButtonForUsersListSwitchContainer';

export const UserFollowers = ({ currentUserId, followers, username }) => {
  const hasFollowers = Array.isArray(followers) && followers.length > 0;

  if (!hasFollowers) return <NoUserFollowers>フォロワーはいません。</NoUserFollowers>;
  return (
    followers.map((follower) => (
      <UserListItem key={follower.id}>
        <Link to={`/${follower.username}`}>{follower.nickname}</Link>
        <FollowButtonForUsersListSwitchContainer currentUserId={currentUserId} userIdToFollowOrUnFollow={follower.id} username={username} />
      </UserListItem>
    ))
  );
};

const NoUserFollowers = styled.div`
  height: 70px;
  width: 200px;
  margin-top: 15px;
  text-align: left;
`;

const UserListItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 70px;
  width: 200px;
  margin-top: 15px;
  border-bottom: 1px solid #ddd;
  text-align: left;
`;