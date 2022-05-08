import React, { useState } from 'react';
import styled from 'styled-components';

const FollowChange = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const FollowChangeLinkCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FollowChangeLinkDone = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 168px;
  border: 1px solid black;
  border-color: rgb(207, 217, 222);
  border-radius: 9999px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

const FollowChangeLinkDoneToUnFollow = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 168px;
  border: 1px solid black;
  border-color: rgb(253, 201, 206);
  border-radius: 9999px;
  font-weight: bold;
  background-color: rgba(244, 33, 46, 0.1);
  cursor: pointer;
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

export function FollowButton() {
  const [followAble, setFollowAble] = useState(false);
  const [changeFollowButtonStyle, setChangeFollowButtonStyle] = useState(false);

  if (followAble === true) {
    return (
      <FollowChange>
        <FollowChangeLinkCover>
          {changeFollowButtonStyle === false ? (
            <FollowChangeLinkDone
              onMouseEnter={() => {
                setChangeFollowButtonStyle(true);
              }}
              onClick={() => {
                setFollowAble(false);
              }}
              >
              <span>フォロー中</span>
            </FollowChangeLinkDone>
          ) : (
            <FollowChangeLinkDoneToUnFollow
              onMouseLeave={() => {
                setChangeFollowButtonStyle(false);
              }}
              onClick={() => {
                setFollowAble(false);
              }}
              >
              <span>フォロー解除</span>
            </FollowChangeLinkDoneToUnFollow>
          )}
        </FollowChangeLinkCover>
      </FollowChange>
    );
  } else {
    return (
      <FollowChange>
        <FollowChangeLinkCover>
          <FollowChangeLinkNone
            onClick={() => {
              setFollowAble(true);
            }}
          >
            <span>フォロー</span>
          </FollowChangeLinkNone>
        </FollowChangeLinkCover>
      </FollowChange>
    );
  }
}
