import React, { useState, useContext, useEffect } from 'react';
import { getUser, updateUser } from '../../../../infra/api';
import { AuthContext } from '../../../../auth/authProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TitleWithBackArrowHeader } from '../../../presentational/molecules/Header/titleWithBackArrowHeader';
import { LogOutButton } from '../logOutButton';
import { List } from '../../../presentational/molecules/List';
import { ProfileSwitch } from './profileSwitch';
import { TaskStatusSwitch } from '../tasks/taskStatusSwitch';
import { FollowButton } from './followButton';

export function UserTasksList() {
  const { signout } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);

  let currentUserDataText;
  let currentUserData;
  let currentUserId;
  let currentUserName;
  if(localStorage.getItem('user')) {
    currentUserDataText = localStorage.getItem('user');
    currentUserData = JSON.parse(currentUserDataText);
    currentUserId = String(currentUserData.id);
    currentUserName = String(currentUserData.username);
  }

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
  const [userBio, setUserBio] = useState([]);
  const [userNickName, setUserNickName] = useState([]);
  const [userName, setUserName] = useState([]);
  const [userId, setUserId] = useState([]);
  const [userNameDefault, setUserNameDefault] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getUser(userNameInUrl)
      .then((response) => {
        const taskUser = response.data.user;
        const taskData = taskUser.tasks;
        const dOrderData = sortdOrder(taskData);
        const likeTaskData = taskUser.like_tasks;
        const taskCreatedUser = response.data.task_created_user;
        const userBio = response.data.user.bio;
        const userNickName = response.data.user.nickname;
        const userName = response.data.user.username;
        const userId = response.data.user.id;
        const userNameDefault = response.data.user.username;
        if (isMounted) setTaskCreatedUser(taskCreatedUser);
        if (isMounted) setUserLikedTasks(likeTaskData);
        if (isMounted) setTaskUser(taskUser);
        if (isMounted) setUserTasks(dOrderData);
        if (isMounted) setUserBio(userBio);
        if (isMounted) setUserNickName(userNickName);
        if (isMounted) setUserName(userName);
        if (isMounted) setUserId(String(userId));
        if (isMounted) setUserNameDefault(userNameDefault);
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

  const [bioAble, setBioAble] = useState(true);
  const [load, setLoad] = useState(false);
  const updateUserFunc = () => {
    const username = userNameDefault;
    const user = { nickname: userNickName, username: userName, bio: userBio };
    updateUser(username, user)
      .then((response) => {
        const userBio = response.data.user.bio;
        const userNickName = response.data.user.nickname;
        const userName = response.data.user.username;
        setUserBio(userBio);
        setUserNickName(userNickName);
        setUserName(userName);
        setBioAble(true);
        setLoad(false);
      })
      // .catch();
      .catch(errors => {
        if(errors.response.status === 401) {
          window.alert("認証できませんでした。");
        } else {
          window.alert("このusernameはすでに登録されています。");
        }
        setUserName(userNameDefault);
        setLoad(false);
      });
  };

  const [changeUserNameCheckAble, setChangeUserNameCheckAble] = useState(false);
  const changeUserNameFunc = () => {
    setLoad(false);
    setChangeUserNameCheckAble(false);
    updateUserFunc();
    navigate(`/signIn`);
    signout();
    // setTimeout(() => signout(), 1000);
  };

  const revertUserNameFunc = (username) => {
    getUser(username)
    .then((response) => {
      const userNickName = response.data.user.nickname;
      const userName = response.data.user.username;
      setUserNickName(userNickName);
      setUserName(userName);
    })
    .catch();
    // .catch((response) => {
    // });
  }

  const unChangeUserNameFunc = () => {
    setLoad(false);
    const username = userNameDefault;
    revertUserNameFunc(username);
    setChangeUserNameCheckAble(false);
    setBioAble(true);
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setLoad(true);
    const username = userNameDefault;
    const user = { nickname: userNickName, username: userName, bio: userBio };
    if(username === userName) {
      updateUserFunc(username, user);
    } else {
      setChangeUserNameCheckAble(true);
    }
  };

  const revertUserBio = () => {
    const username = userNameDefault;
    getUser(username)
      .then((response) => {
        const userBio = response.data.user.bio;
        const userNickName = response.data.user.nickname;
        const userName = response.data.user.username;
        setUserBio(userBio);
        setUserNickName(userNickName);
        setUserName(userName);
      })
      .catch();
    // .catch((response) => {
    // });
    setBioAble(true);
  };

  const uniqueTaskCreatedUsers = Array.from(
    new Map(taskCreatedUser.map((user) => [user.id, user])).values()
  );

  return (
    <>
      {changeUserNameCheckAble === true && (
        <BackgroundDisAbledCover>
          <BackgroundDisAbled>
            <div>ユーザーIDの変更には際ログインが必要です。変更しますか？</div>
            <button type="button" onClick={() => changeUserNameFunc()}>
              はい
            </button>
            <button type="button" onClick={() => unChangeUserNameFunc()}>
              いいえ
            </button>
          </BackgroundDisAbled>
        </BackgroundDisAbledCover>
      )}
      <ContentHeaderCover>
        <TitleWithBackArrowHeader>{userNickName}</TitleWithBackArrowHeader>
        <FollowButton currentUserId={currentUserId} />
        <ProfileSwitch
          currentUserId={String(currentUserId)}
          userBio={userBio}
          userNickName={userNickName}
          setUserNickName={setUserNickName}
          userName={userName}
          setUserName={setUserName}
          userId={userId}
          bioAble={bioAble}
          setBioAble={setBioAble}
          load={load}
          handleTextSubmit={handleTextSubmit}
          revertUserBio={revertUserBio}
           />
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
                    url={`/${taskUser.username}`}
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
              uniqueTaskCreatedUsers.map((user) => (
                String(task.user_id) === String(user.id) && (
                  <ListCoverWrapper key={task.id}>
                    <ListCover>
                      <List
                        title={task.title}
                        titleUrl={`/${String(user.username)}/tasks/${String(task.id)}`}
                        content={task.content}
                        url={`/${user.username}`}
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
          {currentUser && <LogOutButton text="ログアウト" />}
        </LogOutButtonCover>
      )}
    </>
  );
}

const BackgroundDisAbledCover = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ddd;
`;

const BackgroundDisAbled = styled.div`
  margin: 30px;
  margin-top: 40%;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
`;

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

const ContentHeaderCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 260px;
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