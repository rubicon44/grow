import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../../../../auth/authProvider';
import { getUser, updateUser } from '../../../../../infra/api';
import { currentUser } from '../../../../../infra/currentUser';
import { CheckThatReLoginWhenChangeUserId } from './checkThatReLoginWhenChangeUserId';
import { AlreadyPostList } from './alreadyPostList';
import { ContentHeader } from './contentHeader';
import { AlreadyLikeList } from './alreadyLikeList';
import { NoLikeList } from './noLikeList';
import { NoPostList } from './noPostList';
import { LogOutButton } from '../../logOutButton';

export const UserTasksList = () => {
  const { signout } = useContext(AuthContext);
  const { currentUserAuth } = useContext(AuthContext);

  const currentUserId = () => {
    if(localStorage.getItem('user')) {
      const id = currentUser().id;
      return id;
    }
    return null;
  };

  const currentUserName = () => {
    if(localStorage.getItem('user')) {
      const username = currentUser().username;
      return username;
    }
    return null;
  };

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

  const [bioAble, setBioAble] = useState(true);
  const [load, setLoad] = useState(false);
  const updateUserFunc = () => {
    const username = userData.userNameDefault;
    const user = { nickname: userData.userNickName, username: userData.userName, bio: userData.userBio };
    updateUser(username, user)
      .then((response) => {
        const userBio = response.data.user.bio;
        const userNickName = response.data.user.nickname;
        const userName = response.data.user.username;
        setUserData((prevState) => ({
          ...prevState,
          userBio: userBio,
          userNickName: userNickName,
          userName: userName,
        }));
        setBioAble(true);
        setLoad(false);
      })
      .catch(errors => {
        if(errors.response.status === 401) {
          window.alert("認証できませんでした。");
        } else {
          window.alert("このusernameはすでに登録されています。");
        }
        setUserData((prevState) => ({
          ...prevState,
          userName: userData.userNameDefault,
        }));
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
  };

  const revertUserNameFunc = (username) => {
    getUser(username)
    .then((response) => {
      const userNickName = response.data.user.nickname;
      const userName = response.data.user.username;
      setUserData((prevState) => ({
        ...prevState,
        userNickName: userNickName,
        userName: userName,
      }));
    })
    .catch();
  }

  const unChangeUserNameFunc = () => {
    setLoad(false);
    const username = userData.userNameDefault;
    revertUserNameFunc(username);
    setChangeUserNameCheckAble(false);
    setBioAble(true);
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setLoad(true);
    const username = userData.userNameDefault;
    const user = { nickname: userData.userNickName, username: userData.userName, bio: userData.userBio };
    if(username === userData.userName) {
      updateUserFunc(username, user);
    } else {
      setChangeUserNameCheckAble(true);
    }
  };

  const revertUserBio = () => {
    const username = userData.userNameDefault;
    getUser(username)
      .then((response) => {
        const userBio = response.data.user.bio;
        const userNickName = response.data.user.nickname;
        const userName = response.data.user.username;
        setUserData((prevState) => ({
          ...prevState,
          userBio: userBio,
          userNickName: userNickName,
          userName: userName,
        }));
      })
      .catch();
    setBioAble(true);
  };

  return (
    <>
      {changeUserNameCheckAble === true && (<CheckThatReLoginWhenChangeUserId changeUserNameFunc={changeUserNameFunc} unChangeUserNameFunc={unChangeUserNameFunc} />)}
      <ContentHeader
        title={userData.userNickName}
        currentUserId={String(currentUserId())}
        load={load}
        handleTextSubmit={handleTextSubmit}
        revertUserBio={revertUserBio}
        bioAble={bioAble}
        setBioAble={setBioAble}
        userData={userData}
        setUserData={setUserData}
      />
      <Content>
        <NextGanttLink type="button" onClick={nextGanttFunc}>ガントチャート</NextGanttLink>
        <>
          {userData.userTasks.length === 0 ? (<NoPostList userData={userData} />) : (<AlreadyPostList userData={userData} />)}
        </>
        <>
          <LikedTask>いいねしたタスク</LikedTask>
          {userData.userLikedTasks.length === 0 ? (<NoLikeList userData={userData} />) : (<AlreadyLikeList userData={userData} />)}
        </>
      </Content>

      {String(currentUserName()) === String(userNameInUrl) && (
        <LogOutButtonCover>
          {currentUserAuth && <LogOutButton text="ログアウト" />}
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