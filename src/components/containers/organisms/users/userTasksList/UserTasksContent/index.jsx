import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getUser } from 'infra/api';
import { UserTasksAlreadyPostList } from 'components/containers/organisms/Users/UserTasksList/UserTasksContent/UserTasksAlreadyPostList';
import { UserTasksAlreadyLikeList } from 'components/containers/organisms/Users/UserTasksList/UserTasksContent/UserTasksAlreadyLikeList';
import { UserTasksNoLikeList } from 'components/containers/organisms/Users/UserTasksList/UserTasksContent/UserTasksNoLikeList';
import { UserTasksNoPostList } from 'components/containers/organisms/Users/UserTasksList/UserTasksContent/UserTasksNoPostList';

export const UserTasksContent = () => {
  const sortdOrder = (data) => {
    const list = data;
    if (list.length === 0) {
      const dOrder = [];
      return dOrder;
    }
    const dOrder = list.sort((a, b) => {
      if (a.id < b.id) {
        return 1;
      }
      if (a.id > b.id) {
        return -1;
      }
      return 0;
    });
    return dOrder;
  };

  const location = useLocation();
  const locationPathName = location.pathname.split('/');
  const userNameInUrl = locationPathName[locationPathName.length - 1];
  const [userData, setUserData] = useState({
    taskUser: [],
    userTasks: [],
    userLikedTasks: [],
    taskCreatedUser: [],
    userBio: [],
    userNickName: [],
    userName: [],
    userId: [],
    userNameDefault: [],
  });
  useEffect(() => {
    let isMounted = true;
    getUser(userNameInUrl)
      .then((response) => {
        const taskUser = response.data.user;
        const taskData = taskUser.tasks;
        const dOrderTaskData = sortdOrder(taskData);
        const dOrderlikedTaskData = sortdOrder(taskUser.like_tasks);
        const taskCreatedUser = response.data.task_created_user;
        const userBio = response.data.user.bio;
        const userNickName = response.data.user.nickname;
        const userName = response.data.user.username;
        const userId = response.data.user.id;
        const userNameDefault = response.data.user.username;
        if (isMounted) setUserData({
          taskUser: taskUser,
          userTasks: dOrderTaskData,
          // todo: dOrderlikedTaskDataでは、一度取り消したいいねを復活させると、いいねしたタスクが先頭にこない。おそらくAPI側の問題。
          userLikedTasks: dOrderlikedTaskData,
          taskCreatedUser: taskCreatedUser,
          userBio: userBio,
          userNickName: userNickName,
          userName: userName,
          userId: String(userId),
          userNameDefault: userNameDefault,
        });
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, [userNameInUrl]);

  const navigate = useNavigate();
  const nextGanttFunc = () => {
    navigate(`/${userData.taskUser.username}/gantt`, {
      state: {
        taskUser: userData.taskUser,
        userTasks: userData.userTasks,
      },
    });
  };

  return (
    <UserTasksContentCover>
      <NextGanttLink type="button" onClick={nextGanttFunc}>ガントチャート</NextGanttLink>
      <>
        {userData.userTasks.length === 0 ? (<UserTasksNoPostList userData={userData} />) : (<UserTasksAlreadyPostList userData={userData} />)}
      </>
      <>
        <LikedTask>いいねしたタスク</LikedTask>
        {userData.userLikedTasks.length === 0 ? (<UserTasksNoLikeList userData={userData} />) : (<UserTasksAlreadyLikeList userData={userData} />)}
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