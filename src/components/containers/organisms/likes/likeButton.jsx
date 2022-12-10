import React, { useState, useEffect } from 'react';
import { postLikes, getLikes, deleteLike } from '../../../../infra/api';
import { pink } from '@mui/material/colors';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import styled from 'styled-components';

export function LikeButton(props) {
  const { currentUserId } = props;
  const { taskId } = props;
  const [likeCount, setLikeCount] = useState(0);
  const [likedUserId, setLikedUserId] = useState();
  const [likeId, setLikeId] = useState();
  useEffect(() => {
    let isMounted = true;
    const like = { task_id: taskId, current_user_id: currentUserId };
    getLikes(like)
      .then((response) => {
        if (isMounted) setLikeCount(response.data.like_count);
        if (isMounted) setLikedUserId(String(response.data.liked_user_id));
        if (isMounted) setLikeId(String(response.data.like_id));
        if (isMounted) setCurrentTaskId(String(response.data.task_id));
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
      if (isMounted) setLikeCount(response.data.like_count);
      if (isMounted) setLikedUserId(String(response.data.liked_user_id));
      if (isMounted) setLikeId(String(response.data.like_id));
      if (isMounted) setCurrentTaskId(String(response.data.task_id));
      setLikeCount(likeCount + 1);
    })
    .catch();
    return () => {
      isMounted = false;
    };
  };

  const handleClickLikeDelete = () => {
    let isMounted = true;
    const like = { task_id: taskId, current_user_id: currentUserId, like_id: likeId };
    deleteLike(like)
    .then((response) => {
      if (isMounted) setLikeCount(response.data.like_count);
      if (isMounted) setLikedUserId(String(response.data.liked_user_id));
      if (isMounted) setLikeId(String(response.data.like_id));
      if (isMounted) setCurrentTaskId('');
      setLikeCount(likeCount - 1);
    })
    .catch();
    return () => {
      isMounted = false;
    };
  };

  return (
    <>
      {currentUserId === likedUserId && taskId === currentTaskId ? (
        <ThumbUpIconCover onClick={handleClickLikeDelete}>
          <ThumbUpIcon sx={{ color: pink[500] }} />
          {likeCount}
        </ThumbUpIconCover>
      ) : (
        <ThumbUpIconCover onClick={handleClickLikePost}>
          <ThumbUpIcon />
          {likeCount}
        </ThumbUpIconCover>
      )}
    </>
  );
};

const ThumbUpIconCover = styled.span`
  cursor: pointer;
`;