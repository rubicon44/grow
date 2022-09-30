import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getFollowings } from '../../../../infra/api';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../../../presentational/atoms/Title';
import { BackArrow } from '../../../presentational/atoms/Arrow/backArrow';
import { FollowButtonForUsersList } from './followButtonForUsersList';

export function FollowingsList() {
  const location = useLocation();
  const { userId } = location.state;
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const user_id = userId;
    getFollowings(user_id)
      .then((response) => {
        if (isMounted) setFollowings(response.data.followings);
      })
      .catch();
    // .catch(() => {
    // });
    return () => {
      isMounted = false;
    };
  }, [userId]);

  if (followings == null || followings == '') {
    return (
      <>
        <ListHeader>
          <BackArrow />
          <Title title="フォロー中" />
        </ListHeader>
        <ListCover>
          <div>フォローしているユーザーはいません。</div>
        </ListCover>
      </>
    )
  } else {
    return (
      <>
        <ListHeader>
          <BackArrow />
          <Title title="フォロー中" />
        </ListHeader>
        <ListCover>
          {followings.map((following) => (
            <UsersList key={following.id}>
              <Link to={`/${following.username}`}>{following.nickname}</Link>
              <FollowButtonForUsersList followerId={following.id} userId={userId} />
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

const ListHeader = styled.div`
  display: flex;
  width: 100%;

  > h2 {
    width: 100%;
    margin-right: 45px;
  }
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