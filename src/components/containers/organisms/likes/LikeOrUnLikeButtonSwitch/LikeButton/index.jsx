import PropTypes from "prop-types";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import styled from "styled-components";

export const LikeButton = ({ handleClickLikePost, likeData }) => (
  <ThumbUpIconCover onClick={handleClickLikePost}>
    <ThumbUpIcon />
    {likeData.likeCount}
  </ThumbUpIconCover>
);

LikeButton.propTypes = {
  handleClickLikePost: PropTypes.func.isRequired,
  likeData: PropTypes.shape({
    likeCount: PropTypes.number,
    likes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        likedUserId: PropTypes.string.isRequired,
        taskId: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const ThumbUpIconCover = styled.span`
  cursor: pointer;
`;
