import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FollowButtonForUsersListSwitchContainer } from '../../userButton/followButtonForUsersListSwitchContainer';

export const UserFollowings = ({ currentUserId, followings, username }) => {
  const hasFollowings = Array.isArray(followings) && followings.length > 0;

  return (
    hasFollowings ? (
      followings.map((following) => (
        <UserListItem key={following.id}>
          <Link to={`/${following.username}`}>{following.nickname}</Link>
          <FollowButtonForUsersListSwitchContainer currentUserId={currentUserId} userIdToFollowOrUnFollow={following.id} username={username} />
        </UserListItem>
      ))
    ) : (
      <NoUserFollowings>フォローしているユーザーはいません。</NoUserFollowings>
    )
  );
};

const NoUserFollowings = styled.div`
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