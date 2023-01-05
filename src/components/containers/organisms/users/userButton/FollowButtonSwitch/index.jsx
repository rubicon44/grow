import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getUser, getFollowings } from 'infra/api';
import { FollowButton } from 'components/containers/organisms/Users/UserButton/FollowButton';
import { FollowingOrUnFollowButtonSwitch } from 'components/containers/organisms/Users/UserButton/FollowingOrUnFollowButtonSwitch';

export const FollowButtonSwitch = (props) => {
  const location = useLocation();
  const locationPathName = location.pathname.split('/');
  const userNameInUrl = locationPathName[locationPathName.length - 1];
  const { currentUserId } = props;
  const [followAble, setFollowAble] = useState(false);
  const [followerId, setFollowerId] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getUser(userNameInUrl)
      .then((response) => {
        const followerId = response.data.user.id;
        if (isMounted) setFollowerId(String(followerId));
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, [userNameInUrl]);

  const [usersFollowingId, setUsersFollowingId] = useState([]);
  // todo: ここのuseEffectは削減できそうな気がする
  const [followings, setFollowings] = useState([]);
  useEffect(() => {
    let isMounted = true;
    const user_id = currentUserId;
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
  }, [followerId]);

  if(String(currentUserId) !== String(followerId)) {
    return(
      <>
        {followAble === false ? (
          <>
            {String(usersFollowingId) === String(followerId) ? (<FollowingOrUnFollowButtonSwitch currentUserId={currentUserId} followerId={followerId} setFollowAble={setFollowAble} />) : (
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
  } else {
    return null;
  }
};