import { useEffect, useState } from 'react';
import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { deleteLike, getLikes, postLikes } from 'infra/api';

export const useLike = (taskId) => {
  const currentUserId = useCurrentUserId();
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [likeData, setLikeData] = useState({
    likeCount: 0,
    likedUserId: 0,
    likeId: 0,
  });

  useEffect(() => {
    let isMounted = true;
    const like = { task_id: taskId, current_user_id: currentUserId };
    getLikes(like)
      .then((response) => {
        if (isMounted) setLikeData({
          likeCount: response.data.like_count,
          likedUserId: String(response.data.liked_user_id),
          likeId: String(response.data.like_id),
        });
        if (isMounted) setCurrentTaskId(String(response.data.task_id));
        if (isMounted) setIsLoading(true);
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, [currentUserId, taskId]);

  const handleClickLikeDelete = () => {
    let isMounted = true;
    const like = { task_id: taskId, current_user_id: currentUserId, like_id: likeData.likeId };
    deleteLike(like)
    .then((response) => {
      if (isMounted) setLikeData({
        likeCount: response.data.like_count,
        likedUserId: String(response.data.liked_user_id),
        likeId: String(response.data.like_id),
      });
      if (isMounted) setCurrentTaskId('');
      setLikeData((prevState) => ({
        ...prevState,
        likeCount: likeData.likeCount - 1,
      }));
    })
    .catch();
    return () => {
      isMounted = false;
    };
  };

  const handleClickLikePost = () => {
    let isMounted = true;
    const like = { task_id: taskId, current_user_id: currentUserId };
    postLikes(like)
    .then((response) => {
      if (isMounted) setLikeData({
        likeCount: response.data.like_count,
        likedUserId: String(response.data.liked_user_id),
        likeId: String(response.data.like_id),
      });
      if (isMounted) setCurrentTaskId(String(response.data.task_id));
      setLikeData((prevState) => ({
        ...prevState,
        likeCount: likeData.likeCount + 1,
      }));
    })
    .catch();
    return () => {
      isMounted = false;
    };
  };

  return [likeData, { currentTaskId, isLoading, handleClickLikeDelete, handleClickLikePost }];
};