import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteRelationships, getFollowings, postRelationships } from '../../../../infra/api';

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

  // todo: フォロ-関数が作動した際に下記stateを更新したい。
  const [currentUserFollowings, setCurrentUserFollowings] = useState([]);
  useEffect(() => {
    let isMounted = true;
    const user_id = currentUserId;
    getFollowings(user_id)
      .then((response) => {
        if (isMounted) setCurrentUserFollowings(response.data.followings);
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, []);

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

  // フォローボタン返却関数
  const returnFollowButton = () => {
    // todo: currentUserFollowingsの値を更新しなければいけない。
    const xxx = currentUserFollowings.map((user) => {
      if(String(user.id) === String(followerId)) {
        return 0;
      };
      if(String(user.id) !== String(followerId)) {
        return 1;
      } else {
        return null;
      }
    });

    const set = new Set(xxx);
    const newArr = [...set];

    const AAA = () => {
      let nnn;
      if(newArr.includes(0)) {
        nnn = 0;
      } else {
        nnn = 1;
      }

      if(nnn === 0) {
        return <FollowChangeLinkDoneOrLinkDoneToUnFollowFunc />
      }
      if (nnn === 1) {
        // todo: ここでフォローされた後、上記の「nnn === 0」の処理が動いていない。
        return <FollowChangeFunc />
      } else {
        return null;
      }
    }
    return AAA();
  };

  if(String(currentUserId) === String(userId)) {
    return(
      <>
        {followAble === false ? (
          <>
            {String(usersFollowingId) === String(followerId) ? (<FollowChangeLinkDoneOrLinkDoneToUnFollowFunc />) : (<FollowChangeFunc />)}
          </>
        ) : (<FollowChangeFunc />)}
      </>
    );
  } else if (String(currentUserId) !== String(userId)){
    // todo: このままだと、誤って2回フォローできてしまう(Reportのフォローボタンは正常。)。
    if(String(currentUserId) === String(followerId)) {
      return (null);
    }
    return followAble === false ? returnFollowButton() : <FollowChangeFunc />;
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