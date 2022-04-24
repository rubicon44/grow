import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const Content = styled.article`
//   border-top: 1px solid #ddd;
//   width: 100%;
// `;

export function LikeButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <span onClick={handleClick}>
      <ThumbUpIcon />
      {count}
    </span>

  );
};