import styled from 'styled-components';
import { UserTasksAlreadyPostList } from 'components/containers/organisms/Users/UserTasksList/UserTasksContent/UserTasksAlreadyPostList';
import { UserTasksAlreadyLikeList } from 'components/containers/organisms/Users/UserTasksList/UserTasksContent/UserTasksAlreadyLikeList';
import { UserTasksNoLikeList } from 'components/containers/organisms/Users/UserTasksList/UserTasksContent/UserTasksNoLikeList';
import { UserTasksNoPostList } from 'components/containers/organisms/Users/UserTasksList/UserTasksContent/UserTasksNoPostList';

export const UserTasksContent = ({ nextGanttFunc, userData, likedTasksWithUser }) => {
  return (
    <UserTasksContentCover>
      <NextGanttLink type="button" onClick={nextGanttFunc}>ガントチャート</NextGanttLink>
      <>
        {userData.userTasks.length === 0 ? (<UserTasksNoPostList userData={userData} />) : (<UserTasksAlreadyPostList userData={userData} />)}
      </>
      <>
        <LikedTask>いいねしたタスク</LikedTask>
        {userData.likedTasksWithUser.length === 0 ? (<UserTasksNoLikeList userData={userData} />) : (<UserTasksAlreadyLikeList likedTasksWithUser={likedTasksWithUser} />)}
      </>
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

const LikedTask = styled.div`
  margin: 30px 0;
  padding-top: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: red;
  border-top: 1px solid #ddd;
`;