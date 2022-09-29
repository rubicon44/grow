import React, { useState, useContext, useEffect } from 'react';
import { getUser, getCurrentUser } from '../../../../infra/api';
import { AuthContext } from '../../../../auth/authProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BackButton } from '../../../presentational/atoms/Button/backButton';
import { Title } from '../../../presentational/atoms/Title';
import { LogOutButton } from '../logOutButton';
import { List } from '../../../presentational/molecules/List';
import { ProfileSwitch } from './profileSwitch';
import { TaskStatusSwitch } from '../tasks/taskStatusSwitch';
import { FollowButton } from './followButton';

export function UserTasksList() {
  const { currentUser } = useContext(AuthContext);
  const [currentUserAble, setCurrentUserAble] = useState(false);
  const [currentUserId, setCurrentUserId] = useState();
  const [currentUserName, setCurrentUserName] = useState([]);
  useEffect(() => {
    let isMounted = true;
    if (currentUser) setCurrentUserAble(true);
    getCurrentUser()
      .then((response) => {
        const currentUserId = String(response.data.user.id);
        const currentUserName = response.data.user.username;
        if (isMounted) setCurrentUserId(currentUserId);
        if (isMounted) setCurrentUserName(currentUserName);
      })
      .catch();
    // .catch((data) => {
    // });
    return () => {
      isMounted = false;
    };
  }, [currentUser]);

  const sortdOrder = (taskData) => {
    const list = taskData;
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

  const [taskUser, setTaskUser] = useState([]);
  const [userTasks, setUserTasks] = useState([]);
  const [userLikedTasks, setUserLikedTasks] = useState([]);
  const [taskCreatedUser, setTaskCreatedUser] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getUser(userNameInUrl)
      .then((response) => {
        const taskUser = response.data.user;
        const taskData = taskUser.tasks;
        const dOrderData = sortdOrder(taskData);
        const likeTaskData = taskUser.like_tasks;
        const taskCreatedUser = response.data.task_created_user;
        if (isMounted) setTaskCreatedUser(taskCreatedUser);
        if (isMounted) setUserLikedTasks(likeTaskData);
        if (isMounted) setTaskUser(taskUser);
        if (isMounted) setUserTasks(dOrderData);
      })
      .catch();
    // .catch((data) => {
    // });
    return () => {
      isMounted = false;
    };
  }, [userNameInUrl]);

  const navigate = useNavigate();
  const nextGunttFunc = () => {
    navigate(`/${taskUser.username}/guntt`, {
      state: {
        taskUser: taskUser,
        userTasks: userTasks,
      },
    });
  };

  const nextFollowingsFunc = () => {
    navigate(`/${taskUser.username}/followings`, {
      state: {
        userId: taskUser.id,
      },
    });
  };

  const nextFollowersFunc = () => {
    navigate(`/${taskUser.username}/followers`, {
      state: {
        userId: taskUser.id,
      },
    });
  };

  return (
    <>
      <ContentHeaderCover>
        <ContentHeader>
          <BackButton />
          <Title title={taskUser.nickname} />
        </ContentHeader>
        <FollowButton />
        <ProfileSwitch currentUserId={String(currentUserId)} />
        <RelationshipsCover>
          <a onClick={() => nextFollowingsFunc()}>
            <span>フォロー中</span>
          </a>
          <a onClick={() => nextFollowersFunc()}>
            <span>フォロワー</span>
          </a>
        </RelationshipsCover>
      </ContentHeaderCover>
      <Content>
        <NextGunttLink
          type="button"
          onClick={() => nextGunttFunc(currentUserId)}
        >
          ガントチャート
        </NextGunttLink>

        <>
          {userTasks.length === 0 ? (
            <ListCover key={userTasks}>
              <div>まだ投稿はありません。</div>
            </ListCover>
          ) : (
            userTasks.map((task) => (
              <ListCoverWrapper key={task.id}>
                <ListCover>
                  <List
                    title={task.title}
                    titleUrl={`/${String(taskUser.username)}/tasks/${String(task.id)}`}
                    content={task.content}
                    url={String(taskUser.username)}
                    text={taskUser.nickname}
                  />
                  <TaskStatusSwitch taskStatus={task.status} />
                </ListCover>
              </ListCoverWrapper>
            ))
          )}
        </>

        <>
          <LikedTask>いいねしたタスク</LikedTask>
          {userLikedTasks.length === 0 ? (
            <ListCover key={userLikedTasks}>
              <div>まだいいねはありません。</div>
            </ListCover>
          ) : (
            userLikedTasks.map((task) => (
              // todo: この方法はあまり綺麗ではない気がする(特にAPIでのデータの返し方を再考したい)。
              // 下記方法だと、自分の投稿をいいねした場合、いいねリストに同じタスクが重複してしまう。
              taskCreatedUser.map((user) => (
                String(task.user_id) === String(user.id) && (
                  <ListCoverWrapper key={task.id}>
                    <ListCover>
                      <List
                        title={task.title}
                        titleUrl={`/${String(user.username)}/tasks/${String(task.id)}`}
                        content={task.content}
                        url={user.username}
                        text={user.nickname}
                      />
                      <TaskStatusSwitch taskStatus={task.status} />
                    </ListCover>
                  </ListCoverWrapper>
                )
              ))
            ))
          )}
        </>
      </Content>
      {String(currentUserName) === String(userNameInUrl) && (
        <LogOutButtonCover>
          {currentUserAble && <LogOutButton text="ログアウト" />}
        </LogOutButtonCover>
      )}
    </>
  );
}

const Content = styled.article`
  border-top: 1px solid #ddd;
  width: 100%;
`;

const LogOutButtonCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-top: 1px solid #000;
  box-sizing: border-box;
`;

const ContentHeader = styled.div`
  display: flex;
  width: 100%;

  > h2 {
    width: 100%;
    margin-right: 45px;
  }
`;

const ContentHeaderCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 260px;
  padding: 30px 10px 0;
  text-align: center;
  background-color: #f8f7f3;
`;

const RelationshipsCover = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;

  > a {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  > a:last-of-type {
    margin-left: 10px;
  }
`;

const NextGunttLink = styled.button`
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

const ListCoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  margin-top: 30px;
`;

const ListCover = styled.div`
  position: relative;
`;