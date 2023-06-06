import { useCallback, useEffect, useState } from "react";
import { useCurrentUserId } from "../useCurrentUserId";
import { deleteLike, getLikes, postLikes } from "../../infra/api";

export const useLike = (taskId) => {
  const currentUserId = useCurrentUserId();
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [likeData, setLikeData] = useState({
    likeCount: 0,
    likes: [],
  });

  const fetchLikeData = useCallback(async () => {
    setLoading(true);
    setError(null);
    const like = {
      currentUserId: Number(currentUserId),
      taskId: Number(taskId),
    };
    try {
      const response = await getLikes(like);
      const likeData = response.data;
      const transformedLikes = likeData.likes.map((like) => ({
        ...like,
        id: like.id.toString(),
        likedUserId: like.likedUserId.toString(),
        taskId: like.taskId.toString(),
      }));
      setLikeData({
        likeCount: likeData.likeCount,
        likes: transformedLikes,
      });
      setCurrentTaskId(taskId);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [currentUserId, taskId]);

  // タスクをいいね済か判定する(LikeOrUnLikeButtonSwitchで使用)。
  const getLikedUserIdFunc = useCallback(() => {
    const filterLikesByUserId = (likes, userId) => {
      const filteredLikes = likes.filter(
        (like) => String(like.likedUserId) === String(userId)
      );
      const likedUserId = filteredLikes.map((like) => like.likedUserId);
      return likedUserId.length > 0 ? likedUserId[0] : null;
    };
    const likedUserId = filterLikesByUserId(likeData.likes, currentUserId);
    return likedUserId;
  }, [currentUserId, likeData.likes]);

  useEffect(() => {
    fetchLikeData();
  }, [fetchLikeData]);

  const handleClickLikeDelete = () => {
    const deleteLikeData = async () => {
      setLoading(true);
      setError(null);
      const like = {
        currentUserId: Number(currentUserId),
        id: Number(likeData.likes.id),
        taskId: Number(taskId),
      };
      try {
        const response = await deleteLike(like);
        const likeData = response.data;
        setLikeData((prevState) => {
          const newLikeData = { ...prevState };
          newLikeData.likeCount = likeData.likeCount - 1;
          return newLikeData;
        });
        // TODO: Consider using state-management-library or useContext or data-fetching-library instead of using API call twice for updating data.
        await fetchLikeData();
        setCurrentTaskId("");
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    deleteLikeData();
  };

  const handleClickLikePost = () => {
    const postLikeData = async () => {
      setLoading(true);
      setError(null);
      const like = {
        currentUserId: Number(currentUserId),
        taskId: Number(taskId),
      };
      try {
        const response = await postLikes(like);
        const likeData = response.data;
        setLikeData((prevState) => ({
          ...prevState,
          likeCount: likeData.likeCount,
        }));
        // TODO: Consider using state-management-library or useContext or data-fetching-library instead of using API call twice for updating data.
        await fetchLikeData();
        setCurrentTaskId(taskId);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    postLikeData();
  };

  return {
    currentTaskId,
    error,
    getLikedUserIdFunc,
    handleClickLikeDelete,
    handleClickLikePost,
    likeData,
    loading,
  };
};
