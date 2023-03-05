import { useCallback, useEffect, useState } from 'react';
import { useCurrentUserId } from '../useCurrentUserId';
import { deleteLike, getLikes, postLikes } from '../../infra/api';

export const useLike = (taskId) => {
  const currentUserId = useCurrentUserId();
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [likeData, setLikeData] = useState({
    likeCount: 0,
    likeId: 0,
    likedUserId: 0,
  });

  const fetchLikeData = useCallback(async () => {
    setLoading(true);
    setError(null);
    const like = { current_user_id: currentUserId, task_id: taskId };
    try {
      const response = await getLikes(like);
      const likeData = response.data;
      setLikeData({
        likeCount: likeData.like_count,
        likeId: String(likeData.like_id),
        likedUserId: String(likeData.liked_user_id),
      });
      setCurrentTaskId(String(likeData.task_id));
    } catch (error) {
      setError(error);
      console.error(`いいねの取得中にエラーが発生しました。: `, error);
    } finally {
      setLoading(false);
    };
  }, [currentUserId, taskId]);

  useEffect(() => {
    fetchLikeData();
  }, [fetchLikeData]);

  const handleClickLikeDelete = () => {
    const deleteLikeData = async () => {
      setLoading(true);
      setError(null);
      const like = { current_user_id: currentUserId, like_id: likeData.likeId, task_id: taskId };
      try {
        const response = await deleteLike(like);
        const likeData = response.data;
        setLikeData(prevState => {
          const newLikeData = { ...prevState };
          newLikeData.likeCount = likeData.likeCount - 1;
          return newLikeData;
        });
        // todo: Consider using state-management-library or useContext or data-fetching-library instead of using API call twice for updating data.
        await fetchLikeData();
        setCurrentTaskId('');
      } catch (error) {
        setError('いいねの削除中にエラーが発生しました。');
        console.error(`いいねの削除中にエラーが発生しました。: `, error);
      } finally {
        setLoading(false);
      };
    };
    deleteLikeData();
  };

  const handleClickLikePost = () => {
    const postLikeData = async () => {
      setLoading(true);
      setError(null);
      const like = { current_user_id: currentUserId, task_id: taskId };
      try {
        const response = await postLikes(like);
        const likeData = response.data;
        setLikeData((prevState) => ({
          ...prevState,
          likeCount: likeData.likeCount,
        }));
        // todo: Consider using state-management-library or useContext or data-fetching-library instead of using API call twice for updating data.
        await fetchLikeData();
        setCurrentTaskId(String(likeData.task_id));
      } catch (error) {
        setError('いいねの登録中にエラーが発生しました。');
        console.error(`いいねの登録中にエラーが発生しました。: `, error);
      } finally {
        setLoading(false);
      };
    };
    postLikeData();
  };

  return { currentTaskId, error, handleClickLikeDelete, handleClickLikePost, likeData, loading };
};