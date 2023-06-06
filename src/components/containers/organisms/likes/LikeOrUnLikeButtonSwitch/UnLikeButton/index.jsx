import PropTypes from "prop-types";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { pink } from "@mui/material/colors";
import styled from "styled-components";

export const UnLikeButton = ({ handleClickLikeDelete, likeData }) => (
  <ThumbUpIconCover onClick={handleClickLikeDelete}>
    <ThumbUpIcon sx={{ color: pink[500] }} />
    {likeData.likeCount}
  </ThumbUpIconCover>
);

UnLikeButton.propTypes = {
  handleClickLikeDelete: PropTypes.func.isRequired,
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
