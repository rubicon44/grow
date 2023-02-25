import { useEffect, useState } from 'react';
import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { useCurrentUserName } from 'hooks/useCurrentUserName';
import { deleteRelationships, getFollowings, postRelationships } from 'infra/api';

export const useFollowAndUnFollow = (userIdToFollowOrUnFollow) => {
  const currentUserId = useCurrentUserId();
  const currentUserName = useCurrentUserName();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [changeFollowButtonStyle, setChangeFollowButtonStyle] = useState(false);
  const [currentUserFollowings, setCurrentUserFollowings] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const username = currentUserName;
    getFollowings(username)
      .then((response) => {
        if (isMounted) setCurrentUserFollowings(response.data.followings);
        if (isMounted) setIsLoading(true);
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, [currentUserName, userIdToFollowOrUnFollow]);

  const setChangeFollowButtonStyleToTrueFunc = () => {
    setChangeFollowButtonStyle(true);
  };

  const setChangeFollowButtonStyleToFalseFunc = () => {
    setChangeFollowButtonStyle(false);
  };

  const followFunc = async () => {
    try {
      const relationships = { following_id: currentUserId, follower_id: userIdToFollowOrUnFollow };
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
      const relationships = { following_id: currentUserId, follower_id: userIdToFollowOrUnFollow };
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
      const following = currentUserFollowings.find(following => following.id === Number(userIdToFollowOrUnFollow));
      if (following) {
        setIsFollowing(true);
      } else {
        setIsFollowing(false);
      };
    }
  }, [currentUserFollowings, userIdToFollowOrUnFollow]);

  return {
    changeFollowButtonStyle,
    currentUserFollowings,
    currentUserName,
    currentUserId,
    followFunc,
    isFollowing,
    isLoading,
    setChangeFollowButtonStyleToFalseFunc,
    setChangeFollowButtonStyleToTrueFunc,
    setCurrentUserFollowings,
    unFollowFunc,
  };
};