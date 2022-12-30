import { useLike } from 'hooks/useLike';
import { LikeOrUnLikeButtonSwitch } from 'components/containers/organisms/Likes/LikeOrUnLikeButtonSwitch';

export const LikeOrUnLikeButtonSwitchContainer = ({ currentUserId, taskId }) => {
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
};