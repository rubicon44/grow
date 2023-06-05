import { useEffect, useState } from "react";
import { useCurrentUserId } from "../useCurrentUserId";
import { useCurrentUserName } from "../useCurrentUserName";
import {
  deleteRelationships,
  getFollowings,
  postRelationships,
} from "../../infra/api";

export const useFollowAndUnFollow = (userIdToFollowOrUnFollow) => {
  const currentUserId = useCurrentUserId();
  const currentUserName = useCurrentUserName();
  const [error, setError] = useState(null);
  const [creating, setCreating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [changeFollowButtonStyle, setChangeFollowButtonStyle] = useState(false);
  const [currentUserFollowings, setCurrentUserFollowings] = useState([]);
  const [isFollowing, setIsFollowing] = useState(null);

  useEffect(() => {
    const username = currentUserName;
    const fetchFollowings = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getFollowings(username);
        const followingsData = response.data.followings;
        setCurrentUserFollowings(followingsData);
        setIsFollowing(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFollowings(username);
  }, [currentUserName]);

  const setChangeFollowButtonStyleToTrueFunc = () => {
    setChangeFollowButtonStyle(true);
  };

  const setChangeFollowButtonStyleToFalseFunc = () => {
    setChangeFollowButtonStyle(false);
  };

  const followFunc = async () => {
    try {
      setCreating(true);
      const relationships = {
        followingId: currentUserId,
        followerId: userIdToFollowOrUnFollow,
      };
      await postRelationships(relationships);
      setIsFollowing(true);
    } catch (error) {
      setError(error);
    } finally {
      setCreating(false);
    }
  };

  const unFollowFunc = async () => {
    try {
      setDeleting(true);
      const relationships = {
        followingId: currentUserId,
        followerId: userIdToFollowOrUnFollow,
      };
      await deleteRelationships(relationships);
      setIsFollowing(false);
    } catch (error) {
      setError(error);
    } finally {
      setDeleting(false);
    }
  };

  useEffect(() => {
    if (currentUserFollowings.length > 0) {
      const following = currentUserFollowings.find(
        (following) => following.id === Number(userIdToFollowOrUnFollow)
      );
      if (following) {
        setIsFollowing(true);
      } else {
        setIsFollowing(false);
      }
    }
  }, [currentUserFollowings, userIdToFollowOrUnFollow]);

  return {
    changeFollowButtonStyle,
    creating,
    currentUserName,
    currentUserId,
    deleting,
    error,
    followFunc,
    loading,
    isFollowing,
    setChangeFollowButtonStyleToFalseFunc,
    setChangeFollowButtonStyleToTrueFunc,
    unFollowFunc,
  };
};
