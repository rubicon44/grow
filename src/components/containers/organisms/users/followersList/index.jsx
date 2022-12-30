import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getFollowers } from 'infra/api';
import { FollowButtonForUsersListSwitch } from 'components/containers/organisms/Users/UserButton/FollowButtonForUsersListSwitch';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const FollowersList = () => {
  const location = useLocation();
  const { userId } = location.state;
  const currentUserDataText = localStorage.getItem('user');
  const currentUserData = JSON.parse(currentUserDataText);
  const currentUserId = String(currentUserData.id);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const user_id = userId;
    getFollowers(user_id)
      .then((response) => {
        if (isMounted) setFollowers(response.data.followers);
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, [userId]);

  if (followers == null || followers == '') {
    return (
      <>
        <TitleWithBackArrowHeader>フォロワー</TitleWithBackArrowHeader>
        <ListCover>
          <div>フォロワーはいません。</div>
        </ListCover>
      </>
    )
  } else {
    return (
      <>
        <TitleWithBackArrowHeader>フォロワー</TitleWithBackArrowHeader>
        <ListCover>
          {followers.map((follower) => (
            <UsersList key={follower.id}>
              <Link to={`/${follower.username}`}>{follower.nickname}</Link>
              <FollowButtonForUsersListSwitch followerId={follower.id} currentUserId={currentUserId} userId={userId} />
            </UsersList>
          ))}
        </ListCover>
      </>
    );
  }
}

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