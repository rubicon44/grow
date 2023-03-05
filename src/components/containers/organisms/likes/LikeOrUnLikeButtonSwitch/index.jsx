import { LikeButton } from './likeButton';
import { UnLikeButton } from './unLikeButton';

export const LikeOrUnLikeButtonSwitch = ({ currentUserId, currentTaskId, handleClickLikeDelete, handleClickLikePost, likeData, taskId }) => {
  return (
    currentUserId === likeData.likedUserId && currentTaskId === taskId ? (
      <UnLikeButton handleClickLikeDelete={handleClickLikeDelete} likeData={likeData} />
    ) : (
      <LikeButton handleClickLikePost={handleClickLikePost} likeData={likeData} />
    )
  );
};