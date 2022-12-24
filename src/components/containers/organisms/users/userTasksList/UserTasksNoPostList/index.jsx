import React from 'react';
import styled from 'styled-components';

export const NoPostList = ({ userData }) => {
  return (
    <ListCover key={userData.userTasks}>
      <div>まだ投稿はありません。</div>
    </ListCover>
  )
};

const ListCover = styled.div`
  position: relative;
`;