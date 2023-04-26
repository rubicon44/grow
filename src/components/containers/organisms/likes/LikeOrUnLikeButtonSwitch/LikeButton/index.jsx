import { memo } from 'react';
import PropTypes from 'prop-types';
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

LikeButton.propTypes = {
  handleClickLikePost: PropTypes.func.isRequired,
  likeData: PropTypes.shape({
    likeCount: PropTypes.number.isRequired,
    likes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      liked_user_id: PropTypes.number.isRequired,
      task_id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

const ThumbUpIconCover = styled.span`
  cursor: pointer;
`;