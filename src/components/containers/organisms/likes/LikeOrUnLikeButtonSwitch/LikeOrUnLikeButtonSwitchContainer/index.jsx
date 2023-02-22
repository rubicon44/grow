import { memo } from 'react';
import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { useLike } from 'hooks/useLike';
import { LikeOrUnLikeButtonSwitch } from 'components/containers/organisms/Likes/LikeOrUnLikeButtonSwitch';

export const LikeOrUnLikeButtonSwitchContainer = memo(({ taskId }) => {
  const currentUserId = useCurrentUserId();
  const { currentTaskId, error, handleClickLikeDelete, handleClickLikePost, likeData, loading } = useLike(taskId);

  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return <LikeOrUnLikeButtonSwitch
           currentTaskId={currentTaskId}
           error={error}
           currentUserId={currentUserId}
           handleClickLikeDelete={handleClickLikeDelete}
           handleClickLikePost={handleClickLikePost}
           likeData={likeData}
           loading={loading}
           taskId={taskId}
         />;
});