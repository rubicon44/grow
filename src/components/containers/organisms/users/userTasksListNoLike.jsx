import React from 'react';
import styled from 'styled-components';

export const UserTasksListNoLike = ({ userData }) => {
  return (
    <ListCover key={userData.userLikedTasks}>
      <div>まだいいねはありません。</div>
    </ListCover>
  )
};

const ListCover = styled.div`
  position: relative;
`;