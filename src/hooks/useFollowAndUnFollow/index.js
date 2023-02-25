import { useState, useEffect } from 'react';
import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { useCurrentUserName } from 'hooks/useCurrentUserName';
import { useUserNameInUrl } from 'hooks/useUserNameInUrl';
import { deleteRelationships, getFollowings, getUser, postRelationships } from 'infra/api';

export const useFollowAndUnFollow = () => {
  const { userNameInUrl } = useUserNameInUrl();
  const currentUserId = useCurrentUserId();

  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [followerId, setFollowerId] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getUser(userNameInUrl)
      .then((response) => {
        const followerId = response.data.user.id;
        if (isMounted) setFollowerId(followerId);
        if (isMounted) setIsLoading(true);
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, []);

  const [currentUserFollowings, setCurrentUserFollowings] = useState([]);
  const currentUserName = useCurrentUserName();
  useEffect(() => {
    let isMounted = true;
    const username = currentUserName;
    getFollowings(username)
      .then((response) => {
        if (isMounted) setCurrentUserFollowings(response.data.followings);
      })
      .catch((error) => {
        alert(error)
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const [changeFollowButtonStyle, setChangeFollowButtonStyle] = useState(false);
  const setChangeFollowButtonStyleToTrueFunc = () => {
    setChangeFollowButtonStyle(true);
  };

  const setChangeFollowButtonStyleToFalseFunc = () => {
    setChangeFollowButtonStyle(false);
  };

  const followFunc = async () => {
    try {
      const relationships = { following_id: currentUserId, follower_id: followerId };
      await postRelationships(relationships).then(
        res => {
          setIsFollowing(true);
        }
      ).catch();
    } catch (err) {
      console.error(err);
    }
  };

  const unFollowFunc = async () => {
    try {
      const relationships = { following_id: currentUserId, follower_id: followerId };
      await deleteRelationships(relationships).then(
        res => {
          setIsFollowing(false);
        }
      ).catch();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (currentUserFollowings.length > 0) {
      const isFollowing = currentUserFollowings.find(following => following.id === followerId);
      if (isFollowing) {
        setIsFollowing(true);
      } else {
        setIsFollowing(false);
      }
    }
  }, [currentUserFollowings, followerId]);

  return {
    changeFollowButtonStyle,
    currentUserId,
    followerId,
    followFunc,
    isFollowing,
    isLoading,
    setChangeFollowButtonStyleToFalseFunc,
    setChangeFollowButtonStyleToTrueFunc,
    unFollowFunc
  };
};