import { memo } from 'react';
import PropTypes from 'prop-types';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { pink } from '@mui/material/colors';
import styled from 'styled-components';

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
    likeId: PropTypes.number,
    likedUserId: PropTypes.number,
  }).isRequired,
};

const ThumbUpIconCover = styled.span`
  cursor: pointer;
`;