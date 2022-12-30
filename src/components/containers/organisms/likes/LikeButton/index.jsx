import { memo } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import styled from 'styled-components';

export const LikeButton = memo(({ handleClickLikePost, likeData }) => {
  return (
    <ThumbUpIconCover onClick={handleClickLikePost}>
      <ThumbUpIcon />
      {likeData.likeCount}
    </ThumbUpIconCover>
  );
});

const ThumbUpIconCover = styled.span`
  cursor: pointer;
`;