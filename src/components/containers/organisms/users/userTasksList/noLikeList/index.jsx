import React from 'react';
import styled from 'styled-components';

export const NoLikeList = ({ userData }) => {
  return (
    <ListCover key={userData.userLikedTasks}>
      <div>まだいいねはありません。</div>
    </ListCover>
  )
};

const ListCover = styled.div`
  position: relative;
`;