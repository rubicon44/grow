import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FollowButtonForUsersListSwitchContainer } from 'components/containers/organisms/Users/UserButton/FollowButtonForUsersListSwitch/FollowButtonForUsersListSwitchContainer';

export const UserFollowings = ({ currentUserId, followings, username }) => {
  const hasFollowings = Array.isArray(followings) && followings.length > 0;

  return (
    hasFollowings ? (
      followings.map((following) => (
        <UserListItem key={following.id}>
          <Link to={`/${following.username}`}>{following.nickname}</Link>
          <FollowButtonForUsersListSwitchContainer followerId={following.id} currentUserId={currentUserId} username={username} />
        </UserListItem>
      ))
    ) : (
      <NoUserFollowings>フォローしているユーザーはいません。</NoUserFollowings>
    )
  );
};

const NoUserFollowings = styled.div`
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