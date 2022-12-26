import React from 'react';
import styled from 'styled-components';
import { postRelationships } from 'infra/api';

export const FollowButton = ({ currentUserId, followerId, setFollowAble, setUsersFollowingId }) => {
  const followFunc = () => {
    const relationships = { following_id: currentUserId, follower_id: followerId };
    postRelationships(relationships).then().catch();
    setFollowAble(false);
    setUsersFollowingId(followerId);
  };

  return (
    <FollowChange>
      <FollowChangeLinkCover>
        <FollowChangeLinkNone onClick={followFunc}>
          <span>フォロー</span>
        </FollowChangeLinkNone>
      </FollowChangeLinkCover>
    </FollowChange>
  );
};

const FollowChange = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const FollowChangeLinkCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FollowChangeLinkNone = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 168px;
  border: 1px solid black;
  border-color: rgb(207, 217, 222);
  border-radius: 9999px;
  color: #fff;
  font-weight: bold;
  background-color: rgb(15, 20, 25);
  cursor: pointer;
`;