import { useEffect, useState } from "react";
import { useCurrentUserId } from "../useCurrentUserId";
import { useCurrentUserName } from "../useCurrentUserName";
import { useGetErrorMessage } from "../useGetErrorMessage";
import {
  deleteRelationships,
  getFollowings,
  postRelationships,
} from "../../infra/api";

export const useFollowAndUnFollow = (userIdToFollowOrUnFollow) => {
  const currentUserId = useCurrentUserId();
  const currentUserName = useCurrentUserName();
  const { getErrorMessage } = useGetErrorMessage();
  const [error, setError] = useState(null);
  const [creating, setCreating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [changeFollowButtonStyle, setChangeFollowButtonStyle] = useState(false);
  const [currentUserFollowings, setCurrentUserFollowings] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const fetchFollowings = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getFollowings(username);
        const followingsData = response.data.followings;
        setCurrentUserFollowings(followingsData);
      } catch (error) {
        setError(error);
        console.error(`ユーザー情報の取得中にエラーが発生しました。: `, error);
        const verbForErrorMessage = `ユーザー情報`;
        const objectForErrorMessage = `取得`;
        getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
      } finally {
        setLoading(false);
      }
    };

    const username = currentUserName;
    fetchFollowings(username);
  }, [currentUserName, getErrorMessage]);

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
      console.error(`ユーザーのフォロー中にエラーが発生しました。: `, error);
      const verbForErrorMessage = `ユーザー`;
      const objectForErrorMessage = `フォロー`;
      getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
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
      console.error(`フォローの解除中にエラーが発生しました。: `, error);
      const verbForErrorMessage = `フォロー`;
      const objectForErrorMessage = `解除`;
      getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
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
