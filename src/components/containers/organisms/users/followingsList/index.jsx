import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FollowButtonForUsersListSwitchContainer } from 'components/containers/organisms/Users/UserButton/FollowButtonForUsersListSwitch/FollowButtonForUsersListSwitchContainer';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const FollowingsList = ({ followings, currentUserId, username }) => {
  if (followings == null || followings == '') {
    return (
      <>
        <TitleWithBackArrowHeader>フォロー中</TitleWithBackArrowHeader>
        <ListCover>
          <div>フォローしているユーザーはいません。</div>
        </ListCover>
      </>
    );
  } else {
    return (
      <>
        <TitleWithBackArrowHeader>フォロー中</TitleWithBackArrowHeader>
        <ListCover>
          {followings.map((following) => (
            <UsersList key={following.id}>
              <Link to={`/${following.username}`}>{following.nickname}</Link>
              <FollowButtonForUsersListSwitchContainer followerId={following.id} currentUserId={currentUserId} username={username} />
            </UsersList>
          ))}
        </ListCover>
      </>
    );
  };
};

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;

const UsersList = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  &:not(:first-of-type) {
    margin-top: 10px;
  }
`;