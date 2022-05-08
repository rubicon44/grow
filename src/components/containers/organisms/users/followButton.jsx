import React from 'react';
import styled from 'styled-components';

const FollowChange = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const FollowChangeLinkCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FollowChangeLink = styled.a`
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
  // background-color: rgba(0, 0, 0, 0);
  background-color: rgb(15, 20, 25);
  cursor: pointer;
`;

export function FollowButton() {
  return (
    <FollowChange>
      <FollowChangeLinkCover>
        <FollowChangeLink
          onClick={() => {
            setBioAble(false);
          }}
        >
          <span>フォロー</span>
        </FollowChangeLink>
      </FollowChangeLinkCover>
    </FollowChange>
  );
}
