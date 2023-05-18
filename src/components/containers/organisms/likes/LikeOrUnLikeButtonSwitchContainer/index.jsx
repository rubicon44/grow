import { memo } from "react";
import PropTypes from "prop-types";
import { useLike } from "../../../../../hooks/useLike";
import { LikeOrUnLikeButtonSwitch } from "../LikeOrUnLikeButtonSwitch";

export const LikeOrUnLikeButtonSwitchContainer = memo(({ taskId }) => {
  const {
    currentTaskId,
    error,
    getLikedUserIdFunc,
    handleClickLikeDelete,
    handleClickLikePost,
    likeData,
    loading,
  } = useLike(taskId);

  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return (
    <LikeOrUnLikeButtonSwitch
      currentTaskId={currentTaskId}
      error={error}
      getLikedUserIdFunc={getLikedUserIdFunc}
      handleClickLikeDelete={handleClickLikeDelete}
      handleClickLikePost={handleClickLikePost}
      likeData={likeData}
      loading={loading}
      taskId={taskId}
    />
  );
});

LikeOrUnLikeButtonSwitchContainer.displayName =
  "LikeOrUnLikeButtonSwitchContainer";

LikeOrUnLikeButtonSwitchContainer.propTypes = {
  taskId: PropTypes.string.isRequired,
};
