import { memo } from 'react';
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

const ThumbUpIconCover = styled.span`
  cursor: pointer;
`;