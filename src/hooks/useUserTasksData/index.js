import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from 'auth/AuthProvider';
import { useSortDescendingOrder } from 'hooks/useSortDescendingOrder';
import { getUser, updateUser } from 'infra/api';

export const useUserTasksData = () => {
  const { signout } = useContext(AuthContext);
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
        const dOrderTaskData = useSortDescendingOrder(taskData);
        const dOrderlikedTaskData = useSortDescendingOrder(taskUser.like_tasks);
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

  // UserTasksContentHeader
  const nextFollowersFunc = () => {
    navigate(`/${userData.taskUser.username}/followers`, {
      state: {
        userId: userData.taskUser.id,
      },
    });
  };

  const nextFollowingsFunc = () => {
    navigate(`/${userData.taskUser.username}/followings`, {
      state: {
        userId: userData.taskUser.id,
      },
    });
  };

  const setBioAbleFunc = () => {
    setBioAble(false);
  };

  // ProfileChangeForm
  const revertUserBioFunc = () => {
    revertUserBio();
  };

  const setUserBioFunc = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      userBio: e.target.value,
    }));
  };

  const setUserNameFunc = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      userName: e.target.value,
    }));
  };

  const setUserNickNameFunc = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      userNickName: e.target.value,
    }));
  };

  // UserTasksContent
  const nextGanttFunc = () => {
    navigate(`/${userData.taskUser.username}/gantt`, {
      state: {
        taskUser: userData.taskUser,
        userTasks: userData.userTasks,
      },
    });
  };

  return { bioAble, changeUserNameCheckAble, changeUserNameFunc, handleTextSubmit, load, nextFollowersFunc, nextFollowingsFunc, nextGanttFunc, revertUserBioFunc, setBioAbleFunc, setUserBioFunc, setUserNameFunc, setUserNickNameFunc, unChangeUserNameFunc, userData, userNameInUrl };
};