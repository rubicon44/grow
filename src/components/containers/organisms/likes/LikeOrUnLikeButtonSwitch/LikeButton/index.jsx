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
    likeCount: PropTypes.number.isRequired,
    likes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        likedUserId: PropTypes.number.isRequired,
        taskId: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const ThumbUpIconCover = styled.span`
  cursor: pointer;
`;
