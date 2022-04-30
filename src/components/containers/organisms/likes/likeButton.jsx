import React, { useState, useEffect } from 'react';
import { postLikes, getLikes, deleteLike } from '../../../../infra/api';
import { pink } from '@mui/material/colors';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const Content = styled.article`
//   border-top: 1px solid #ddd;
//   width: 100%;
// `;

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
        // console.log(response.data);
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
      // console.log(response.data);
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
      // console.log(response.data);
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

  // const LikeButtonSwitch = () => {
  //   if(currentUserId === likedUserId && taskId === currentTaskId ) {
  //     return (
  //       <span onClick={handleClickLikeDelete}>
  //         <ThumbUpIcon sx={{ color: pink[500] }} />
  //         {likeCount}
  //       </span>
  //     );
  //   } else {
  //     return (
  //       <span onClick={handleClickLikePost}>
  //         <ThumbUpIcon />
  //         {likeCount}
  //       </span>
  //     );
  //   };
  // };

  return (
    // <LikeButtonSwitch />

    <>
      {currentUserId === likedUserId && taskId === currentTaskId
        ?
        <span onClick={handleClickLikeDelete}>
          <ThumbUpIcon sx={{ color: pink[500] }} />
          {likeCount}
        </span>
        :
        <span onClick={handleClickLikePost}>
          <ThumbUpIcon />
          {likeCount}
        </span>
      }
    </>
  );
};