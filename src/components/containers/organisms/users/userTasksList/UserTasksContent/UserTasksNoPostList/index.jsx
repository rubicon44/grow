import styled from 'styled-components';

export const UserTasksNoPostList = ({ userData }) => {
  return (
    <ListCover key={userData.userTasks}>
      <div>まだ投稿はありません。</div>
    </ListCover>
  );
};

const ListCover = styled.div`
  position: relative;
`;