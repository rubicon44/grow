import PropTypes from "prop-types";
import styled from "styled-components";
import { LikeButton } from "./LikeButton";
import { UnLikeButton } from "./UnLikeButton";

export const LikeOrUnLikeButtonSwitch = ({
  currentTaskId,
  getLikedUserIdFunc,
  handleClickLikeDelete,
  handleClickLikePost,
  likeData,
  taskId,
}) => (
  <LikeOrUnLikeButtonCover>
    {getLikedUserIdFunc() && String(currentTaskId) === String(taskId) ? (
      <UnLikeButton
        handleClickLikeDelete={handleClickLikeDelete}
        likeData={likeData}
      />
    ) : (
      <LikeButton
        handleClickLikePost={handleClickLikePost}
        likeData={likeData}
      />
    )}
  </LikeOrUnLikeButtonCover>
);

LikeOrUnLikeButtonSwitch.defaultProps = {
  currentTaskId: "",
};

LikeOrUnLikeButtonSwitch.propTypes = {
  currentTaskId: PropTypes.string,
  getLikedUserIdFunc: PropTypes.func.isRequired,
  handleClickLikeDelete: PropTypes.func.isRequired,
  handleClickLikePost: PropTypes.func.isRequired,
  likeData: PropTypes.shape({
    likeCount: PropTypes.number.isRequired,
    likes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        likedUserId: PropTypes.number.isRequired,
        taskId: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  taskId: PropTypes.string.isRequired,
};

const LikeOrUnLikeButtonCover = styled.div`
  text-align: center;
`;
