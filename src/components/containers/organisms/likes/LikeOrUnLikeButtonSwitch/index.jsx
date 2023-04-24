import PropTypes from 'prop-types';
import { LikeButton } from './LikeButton';
import { UnLikeButton } from './UnLikeButton';

export const LikeOrUnLikeButtonSwitch = ({ currentTaskId, currentUserId, handleClickLikeDelete, handleClickLikePost, likeData, taskId }) => {
  return (
    currentUserId === String(likeData.likedUserId) && currentTaskId === String(taskId) ? (
      <UnLikeButton handleClickLikeDelete={handleClickLikeDelete} likeData={likeData} />
    ) : (
      <LikeButton handleClickLikePost={handleClickLikePost} likeData={likeData} />
    )
  );
};

LikeOrUnLikeButtonSwitch.propTypes = {
  currentTaskId: PropTypes.string,
  currentUserId: PropTypes.string,
  handleClickLikeDelete: PropTypes.func.isRequired,
  handleClickLikePost: PropTypes.func.isRequired,
  likeData: PropTypes.shape({
    likeCount: PropTypes.number.isRequired,
    likeId: PropTypes.number,
    likedUserId: PropTypes.number,
  }).isRequired,
  taskId: PropTypes.string.isRequired,
};