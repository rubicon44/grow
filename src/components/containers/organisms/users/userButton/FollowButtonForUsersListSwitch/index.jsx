import { useEffect, useState } from 'react';
import { getFollowings } from 'infra/api';
import { FollowButton } from 'components/containers/organisms/Users/UserButton/FollowButton';
import { FollowingOrUnFollowButtonSwitch } from 'components/containers/organisms/Users/UserButton/FollowingOrUnFollowButtonSwitch';

export const FollowButtonForUsersListSwitch = (props) => {
  const { currentUserId } = props;
  const { userId } = props;
  const { followerId } = props;
  const [followAble, setFollowAble] = useState(false);
  const [usersFollowingId, setUsersFollowingId] = useState([]);

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

  const [currentUserFollowings, setCurrentUserFollowings] = useState([]);
  const [followCheck, setFollowCheck] = useState(false);
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
  }, [followCheck]);

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

  // フォローボタン返却関数
  // todo: 当関数内の変数名の修正、ロジックのリファクタリングを行う。
  const returnFollowingOrUnFollowButtonSwitchFunc = () => {
    const isFollowing = currentUserFollowings.map((user) => {
      if(String(user.id) === String(followerId)) {
        // todo: oと1で基準を作るのは、初見の人にとってわかりづらい。もっとわかりやすい「フォローしているか」「フォローしていないか」で判定する方が良い。
        return 1;
      };
      if(String(user.id) !== String(followerId)) {
        return 0;
      } else {
        return null;
      }
    });

    // todo: もっと処理を整理できそう
    const set = new Set(isFollowing);
    const newArr = [...set];
    let nnn;
    if(newArr.includes(1)) {
      nnn = 1;
    } else {
      nnn = 0;
    };

    if(nnn === 1) {
      return <FollowingOrUnFollowButtonSwitch currentUserId={currentUserId} followerId={followerId} setFollowAble={setFollowAble} />
    };
    if (nnn === 0) {
      return (
        <FollowButton
          currentUserId={currentUserId}
          followerId={followerId}
          setFollowAble={setFollowAble}
          setUsersFollowingId={setUsersFollowingId}
          setFollowCheck={setFollowCheck}
        />
      )
    } else {
      return null;
    };
  };

  if(String(currentUserId) === String(userId)) {
    return(
      <>
        {followAble === false ? (
          <>
            {String(usersFollowingId) === String(followerId) ? (<FollowingOrUnFollowButtonSwitch currentUserId={currentUserId} followerId={followerId} setFollowAble={setFollowAble} />) :
            (
              <FollowButton
                currentUserId={currentUserId}
                followerId={followerId}
                setFollowAble={setFollowAble}
                setUsersFollowingId={setUsersFollowingId}
              />
            )}
          </>
        ) : (
          <FollowButton
            currentUserId={currentUserId}
            followerId={followerId}
            setFollowAble={setFollowAble}
            setUsersFollowingId={setUsersFollowingId}
          />
        )}
      </>
    );
  } else if (String(currentUserId) !== String(userId)){
    // 自身をフォローできないようにする
    if(String(currentUserId) === String(followerId)) {
      return (null);
    }
    return followAble === false ? returnFollowingOrUnFollowButtonSwitchFunc() :
    (
      <FollowButton
        currentUserId={currentUserId}
        followerId={followerId}
        setFollowAble={setFollowAble}
        setUsersFollowingId={setUsersFollowingId}
      />
    );
  } else {
    return null;
  }
};