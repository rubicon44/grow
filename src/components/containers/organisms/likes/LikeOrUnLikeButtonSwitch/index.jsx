import { LikeButton } from 'components/containers/organisms/Likes/LikeButton';
import { UnLikeButton } from 'components/containers/organisms/Likes/LikeButton/UnLikeButton';

export const LikeOrUnLikeButtonSwitch = ({ currentUserId, currentTaskId, handleClickLikeDelete, handleClickLikePost, likeData, taskId }) => {
  return (
    currentUserId === likeData.likedUserId && currentTaskId === taskId ? (
      <UnLikeButton handleClickLikeDelete={handleClickLikeDelete} likeData={likeData} />
    ) : (
      <LikeButton handleClickLikePost={handleClickLikePost} likeData={likeData} />
    )
  );
};