import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FollowButtonForUsersListSwitchContainer } from 'components/containers/organisms/Users/UserButton/FollowButtonForUsersListSwitch/FollowButtonForUsersListSwitchContainer';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const FollowersList = ({ followers, currentUserId, username }) => {
  if (followers == null || followers == '') {
    return (
      <>
        <TitleWithBackArrowHeader>フォロワー</TitleWithBackArrowHeader>
        <ListCover>
          <div>フォロワーはいません。</div>
        </ListCover>
      </>
    );
  } else {
    return (
      <>
        <TitleWithBackArrowHeader>フォロワー</TitleWithBackArrowHeader>
        <ListCover>
          {followers.map((follower) => (
            <UsersList key={follower.id}>
              <Link to={`/${follower.username}`}>{follower.nickname}</Link>
              <FollowButtonForUsersListSwitchContainer followerId={follower.id} currentUserId={currentUserId} username={username} />
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