import { memo } from 'react';
import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { useLike } from 'hooks/useLike';
import { LikeOrUnLikeButtonSwitch } from 'components/containers/organisms/Likes/LikeOrUnLikeButtonSwitch';

export const LikeOrUnLikeButtonSwitchContainer = memo(({ taskId }) => {
  const currentUserId = useCurrentUserId();
  const [likeData, { currentTaskId, isLoading, handleClickLikeDelete, handleClickLikePost }] = useLike(taskId);
  return <LikeOrUnLikeButtonSwitch
           currentTaskId={currentTaskId}
           currentUserId={currentUserId}
           handleClickLikeDelete={handleClickLikeDelete}
           handleClickLikePost={handleClickLikePost}
           isLoading={isLoading}
           likeData={likeData}
           taskId={taskId}
         />;
});