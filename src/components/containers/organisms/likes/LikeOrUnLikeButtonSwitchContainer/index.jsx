import { memo } from "react";
import PropTypes from "prop-types";
import { useGetErrorMessage } from "../../../../../hooks/useGetErrorMessage";
import { useLike } from "../../../../../hooks/useLike";
import { ErrorMessage } from "../../common/ErrorMessage";
import { LikeOrUnLikeButtonSwitch } from "../LikeOrUnLikeButtonSwitch";

export const LikeOrUnLikeButtonSwitchContainer = memo(({ taskId }) => {
  const { getErrorMessage } = useGetErrorMessage();
  const {
    currentTaskId,
    error,
    getLikedUserIdFunc,
    handleClickLikeDelete,
    handleClickLikePost,
    likeData,
  } = useLike(taskId);

  if (error) return <ErrorMessage errorMessage={getErrorMessage(error)} />;
  return (
    <LikeOrUnLikeButtonSwitch
      currentTaskId={currentTaskId}
      error={error}
      getLikedUserIdFunc={getLikedUserIdFunc}
      handleClickLikeDelete={handleClickLikeDelete}
      handleClickLikePost={handleClickLikePost}
      likeData={likeData}
      taskId={taskId}
    />
  );
});

LikeOrUnLikeButtonSwitchContainer.displayName =
  "LikeOrUnLikeButtonSwitchContainer";

LikeOrUnLikeButtonSwitchContainer.propTypes = {
  taskId: PropTypes.string.isRequired,
};
