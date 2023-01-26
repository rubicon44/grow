import { useEffect, useState } from 'react';
import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { useCurrentUserName } from 'hooks/useCurrentUserName';
import { deleteRelationships, getFollowings, postRelationships } from 'infra/api';

export const useFollowAndUnFollowForUsersList = (followerId) => {
  const currentUserId = useCurrentUserId();
  const currentUserName = useCurrentUserName();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  return { changeFollowButtonStyle, currentUserFollowings, currentUserId, currentUserName, isFollowing, isLoading, followFunc, setChangeFollowButtonStyleToFalseFunc, setChangeFollowButtonStyleToTrueFunc, setCurrentUserFollowings, unFollowFunc };
};