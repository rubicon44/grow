import styled from 'styled-components';
import { UserTasksContainer } from './userTasksContainer';
import { UserLikedTasks } from './userLikedTasks';

export const UserTasksContent = ({ error, loading, moveToGanttChart, userData }) => {
  return (
    <UserTasksContentCover>
      <NextGanttLink type="button" onClick={moveToGanttChart}>ガントチャート</NextGanttLink>
      <UserTasksContainer error={error} laoding={loading} userData={userData} />
      <UserLikedTasks userData={userData} />
    </UserTasksContentCover>
  );
};

const UserTasksContentCover = styled.article`
  border-top: 1px solid #ddd;
  width: 100%;
`;

const NextGanttLink = styled.button`
  font-size: 22px;
  font-weight: bold;
  font-family: YuMincho;
  color: #ff444f;
  text-decoraiton: none;
`;