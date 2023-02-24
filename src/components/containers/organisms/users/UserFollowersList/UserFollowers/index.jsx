import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FollowButtonForUsersListSwitchContainer } from 'components/containers/organisms/Users/UserButton/FollowButtonForUsersListSwitch/FollowButtonForUsersListSwitchContainer';

export const UserFollowers = ({ currentUserId, followers, username }) => {
  const hasFollowers = Array.isArray(followers) && followers.length > 0;

  return (
    hasFollowers ? (
      followers.map((follower) => (
        <UserListItem key={follower.id}>
          <Link to={`/${follower.username}`}>{follower.nickname}</Link>
          <FollowButtonForUsersListSwitchContainer followerId={follower.id} currentUserId={currentUserId} username={username} />
        </UserListItem>
      ))
    ) : (
      <NoUserFollowers>フォロワーはいません。</NoUserFollowers>
    )
  );
};

const NoUserFollowers = styled.div`
  margin-top: 15px;
  text-align: left;
`;

const UserListItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 180px;
  margin-top: 15px;
  border-bottom: 1px solid #ddd;
  text-align: left;
`;