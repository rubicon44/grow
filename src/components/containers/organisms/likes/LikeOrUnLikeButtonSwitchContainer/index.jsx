import { memo } from 'react';
import PropTypes from 'prop-types';
import { useCurrentUserId } from '../../../../../hooks/useCurrentUserId';
import { useLike } from '../../../../../hooks/useLike';
import { LikeOrUnLikeButtonSwitch } from '../LikeOrUnLikeButtonSwitch';

export const LikeOrUnLikeButtonSwitchContainer = memo(({ taskId }) => {
  const currentUserId = useCurrentUserId();
  const { currentTaskId, error, handleClickLikeDelete, handleClickLikePost, likeData, loading } = useLike(taskId);

  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return <LikeOrUnLikeButtonSwitch
           currentTaskId={currentTaskId}
           currentUserId={currentUserId}
           error={error}
           handleClickLikeDelete={handleClickLikeDelete}
           handleClickLikePost={handleClickLikePost}
           likeData={likeData}
           loading={loading}
           taskId={taskId}
         />;
});

LikeOrUnLikeButtonSwitchContainer.propTypes = {
  taskId: PropTypes.string.isRequired,
};