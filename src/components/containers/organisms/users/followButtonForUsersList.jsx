import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { postRelationships, deleteRelationships, getFollowings } from '../../../../infra/api';

export const FollowButtonForUsersList = (props) => {
  const { currentUserId } = props;
  const { userId } = props;
  const { followerId } = props;
  const [followAble, setFollowAble] = useState(false);
  const [changeFollowButtonStyle, setChangeFollowButtonStyle] = useState(false);
  const [usersFollowingId, setUsersFollowingId] = useState([]);
  const followFunc = () => {
    const relationships = { following_id: currentUserId, follower_id: followerId };
    postRelationships(relationships).then().catch();
    setFollowAble(false);
    setUsersFollowingId(followerId);
  };

  const unFollowFunc = () => {
    const relationships = { following_id: currentUserId, follower_id: followerId };
    deleteRelationships(relationships).then().catch();
    setFollowAble(true);
  };

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
  }, [followAble]);

  // todo: ここのuseEffectは削減できそうな気がする(他の処理の中に書き込めるかも。)
  useEffect(() => {
    followings.map((users) => {
      if(String(users.id) === String(followerId)) {
        setUsersFollowingId(users.id);
      } else {
        return null;
      }
    })
  }, [followings]);

  const setChangeFollowButtonStyleToTrueFunc = () => {
    setChangeFollowButtonStyle(true);
  }

  const setChangeFollowButtonStyleToFalseFunc = () => {
    setChangeFollowButtonStyle(false);
  }

  const FollowChangeLinkDoneFunc = () => {
    return (
      <FollowChangeLinkDone onMouseEnter={setChangeFollowButtonStyleToTrueFunc}>
        <span>フォロー中</span>
      </FollowChangeLinkDone>
    );
  }

  const FollowChangeLinkDoneToUnFollowFunc = () => {
    return (
      <FollowChangeLinkDoneToUnFollow onMouseLeave={setChangeFollowButtonStyleToFalseFunc} onClick={unFollowFunc}>
        <span>フォロー解除</span>
      </FollowChangeLinkDoneToUnFollow>
    );
  }

  const FollowChangeLinkDoneOrLinkDoneToUnFollowFunc = () => {
    return (
      <FollowChange>
        <FollowChangeLinkCover>
          {changeFollowButtonStyle === false ? (<FollowChangeLinkDoneFunc />) : (<FollowChangeLinkDoneToUnFollowFunc />)}
        </FollowChangeLinkCover>
      </FollowChange>
    );
  }

  const FollowChangeFunc = () => {
    return(
      <FollowChange>
        <FollowChangeLinkCover>
          <FollowChangeLinkNone onClick={followFunc}>
            <span>フォロー</span>
          </FollowChangeLinkNone>
        </FollowChangeLinkCover>
      </FollowChange>
    );
  }

  // console.log("currentUserId: " + currentUserId);
  // console.log("userIdInURL: " + userId);

  // console.log("usersFollowingId: " + usersFollowingId);
  // console.log("followerId: " + followerId);

  // todo: follow/unfollow buttonを整理する。
  // 自分がフォローしていなければ「follow button」を表示
  // 自分がすでにフォローしていれば、「unfollow button」を表示
  // 自分のアカウントであれば、「何も表示しない」
  if(String(currentUserId) === String(userId)) {
    return(
      <>
        {followAble === false ? (
          <>{String(usersFollowingId) === String(followerId) ? (<FollowChangeLinkDoneOrLinkDoneToUnFollowFunc />) : (null)}</>
        ) : (<FollowChangeFunc />)}
      </>
    );
  } else {
    return null;
  }
}

const FollowChange = styled.div`
  margin-left: 30px;
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