import styled from 'styled-components';
import { UserTasksAlreadyLikeList } from 'components/containers/organisms/Users/UserTasksList/UserTasksContent/UserTasksAlreadyLikeList';
import { UserTasksNoLikeList } from 'components/containers/organisms/Users/UserTasksList/UserTasksContent/UserTasksNoLikeList';

export const UserLikedTasks = ({ userData }) => {
  return (
    <>
      <LikedTask>いいねしたタスク</LikedTask>
      {userData.likedTasksWithUser.length === 0 ? (
        <UserTasksNoLikeList userData={userData} />
      ) : (
        <UserTasksAlreadyLikeList userData={userData} />
      )}
    </>
  );
};

const LikedTask = styled.div`
  margin: 30px 0;
  padding-top: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: red;
  border-top: 1px solid #ddd;
`;