import { memo } from "react";
import PropTypes from "prop-types";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { pink } from "@mui/material/colors";
import styled from "styled-components";

export const UnLikeButton = memo(({ handleClickLikeDelete, likeData }) => {
  return (
    <ThumbUpIconCover onClick={handleClickLikeDelete}>
      <ThumbUpIcon sx={{ color: pink[500] }} />
      {likeData.likeCount}
    </ThumbUpIconCover>
  );
});

UnLikeButton.propTypes = {
  handleClickLikeDelete: PropTypes.func.isRequired,
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
