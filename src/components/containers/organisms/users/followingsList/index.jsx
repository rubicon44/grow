import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getFollowings } from 'infra/api';
import { FollowButtonForUsersListSwitch } from 'components/containers/organisms/Users/UserButton/FollowButtonForUsersListSwitch';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const FollowingsList = () => {
  const location = useLocation();
  const { userId } = location.state;
  const currentUserDataText = localStorage.getItem('user');
  const currentUserData = JSON.parse(currentUserDataText);
  const currentUserId = String(currentUserData.id);
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const user_id = userId;
    getFollowings(user_id)
      .then((response) => {
        if (isMounted) setFollowings(response.data.followings);
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, [userId]);

  if (followings == null || followings == '') {
    return (
      <>
        <TitleWithBackArrowHeader>フォロー中</TitleWithBackArrowHeader>
        <ListCover>
          <div>フォローしているユーザーはいません。</div>
        </ListCover>
      </>
    )
  } else {
    return (
      <>
        <TitleWithBackArrowHeader>フォロー中</TitleWithBackArrowHeader>
        <ListCover>
          {followings.map((following) => (
            <UsersList key={following.id}>
              <Link to={`/${following.username}`}>{following.nickname}</Link>
              <FollowButtonForUsersListSwitch followerId={following.id} currentUserId={currentUserId} userId={userId} />
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