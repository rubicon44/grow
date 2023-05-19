import { memo } from "react";
import PropTypes from "prop-types";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { pink } from "@mui/material/colors";
import styled from "styled-components";

// todo: ThumbUpIconCoverにspanを使用するのは適切？
// todo: 全てのHTMLの使用が適切かどうか確認する
export const UnLikeButton = memo(({ handleClickLikeDelete, likeData }) => (
  <ThumbUpIconCover onClick={handleClickLikeDelete}>
    <ThumbUpIcon sx={{ color: pink[500] }} />
    {likeData.likeCount}
  </ThumbUpIconCover>
));

UnLikeButton.displayName = "UnLikeButton";

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
