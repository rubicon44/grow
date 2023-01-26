import styled from 'styled-components';

export const UserTasksNoLikeList = ({ userData }) => {
  return (
    <ListCover key={userData.userLikedTasks}>
      <div>まだいいねはありません。</div>
    </ListCover>
  );
};

const ListCover = styled.div`
  position: relative;
`;