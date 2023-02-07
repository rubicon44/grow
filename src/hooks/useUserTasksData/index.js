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
  const navigate = useNavigate();
  const [bioAble, setBioAble] = useState(true);
  const [changeUserNameCheckAble, setChangeUserNameCheckAble] = useState(false);
  const [checkUserNameChange, setCheckUserNameChange] = useState(false);
  const [load, setLoad] = useState(false);
  const [userData, setUserData] = useState({
    taskUser: [],
    userTasks: [],
    likedTasksWithUser: [],
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
        const likedTasksWithUser = response.data.liked_tasks_with_user;
        const dOrderTaskData = useSortDescendingOrder(taskData);
        const dOrderlikedTaskData = likedTasksWithUser;
        const userBio = response.data.user.bio;
        const userNickName = response.data.user.nickname;
        const userName = response.data.user.username;
        const userId = response.data.user.id;
        const userNameDefault = response.data.user.username;
        if (isMounted) setUserData({
          taskUser: taskUser,
          userTasks: dOrderTaskData,
          likedTasksWithUser: dOrderlikedTaskData,
          userBio: userBio,
          userNickName: userNickName,
          userName: userName,
          userId: String(userId),
          userNameDefault: userNameDefault,
        });
        if (isMounted) setCheckUserNameChange(false);
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, [checkUserNameChange, userNameInUrl]);

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
        setCheckUserNameChange(true);
      })
      .catch(errors => {
        if(errors.response.status === 401) {
          window.alert("認証できませんでした。");
        } else {
          window.alert("このusernameはすでに登録されています。");
        };
        setUserData((prevState) => ({
          ...prevState,
          userName: userData.userNameDefault,
        }));
        setLoad(false);
      });
  };

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
  };

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
    };
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
        username: userData.taskUser.username,
      },
    });
  };

  const nextFollowingsFunc = () => {
    navigate(`/${userData.taskUser.username}/followings`, {
      state: {
        username: userData.taskUser.username,
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

  // UserTasksAlreadyLikeList
  const likedTasksWithUser = userData.likedTasksWithUser;

  return { bioAble, changeUserNameCheckAble, changeUserNameFunc, handleTextSubmit, load, nextFollowersFunc, nextFollowingsFunc, nextGanttFunc, revertUserBioFunc, setBioAbleFunc, setUserBioFunc, setUserNameFunc, setUserNickNameFunc, unChangeUserNameFunc, userData, likedTasksWithUser, userNameInUrl };
};