import { memo, useState, useEffect } from 'react';
import { pink } from '@mui/material/colors';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import styled from 'styled-components';
import { postLikes, getLikes, deleteLike } from 'infra/api';

export const LikeButton = memo((props) => {
  const { currentUserId } = props;
  const { taskId } = props;
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

  const [currentTaskId, setCurrentTaskId] = useState();
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

  return (
    isLoading ? (
      <>
      {currentUserId === likeData.likedUserId && taskId === currentTaskId ? (
        <ThumbUpIconCover onClick={handleClickLikeDelete}>
          <ThumbUpIcon sx={{ color: pink[500] }} />
          {likeData.likeCount}
        </ThumbUpIconCover>
      ) : (
        <ThumbUpIconCover onClick={handleClickLikePost}>
          <ThumbUpIcon />
          {likeData.likeCount}
        </ThumbUpIconCover>
      )}
    </>
    ) : (<ThumbUpIcon />)
  );
});

const ThumbUpIconCover = styled.span`
  cursor: pointer;
`;