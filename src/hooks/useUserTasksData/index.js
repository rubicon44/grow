import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'auth/AuthProvider';
import { useGetErrorMessage } from 'hooks/useGetErrorMessage';
import { useSortDescendingOrder } from 'hooks/useSortDescendingOrder';
import { useUserNameInUrl } from 'hooks/useUserNameInUrl';
import { getUser, updateUser } from 'infra/api';

export const useUserTasksData = () => {
  const navigateToSignIn = useNavigate();
  const { signout } = useContext(AuthContext);
  const { userNameInUrl } = useUserNameInUrl();
  const { getErrorMessage } = useGetErrorMessage();
  const [bioAble, setBioAble] = useState(true);
  const [changeUserNameCheckAble, setChangeUserNameCheckAble] = useState(false);
  const [checkUserNameChange, setCheckUserNameChange] = useState(false);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [userData, setUserData] = useState({
    taskUser: [],
    userTasks: [],
    likedTasksWithUser: [],
    userBio: [],
    userNickName: [],
    userName: [],
    userId: [],
  });

  useEffect(() => {
    const fetchUserData = async (userNameInUrl) => {
      setLoading(true);
      setError(null);
      try {
        // todo: エラーの際、他ユーザーをフォローできてしまうかも。
        const response = await getUser(userNameInUrl)
        const userData = response.data;
        const user = userData.user
        const taskData = user.tasks;
        setUserData({
          taskUser: user,
          userTasks: useSortDescendingOrder(taskData),
          // todo: liked_tasks_with_userがuserDataに格納されていることを知るには、propsTypes等が役に立つ？
          likedTasksWithUser: userData.liked_tasks_with_user,
          userBio: user.bio,
          userNickName: user.nickname,
          userName: user.username,
          userId: String(user.id),
        });
        setCheckUserNameChange(false);
      } catch (error) {
        setError(error);
        console.error(`ユーザーデータの取得中にエラーが発生しました。: `, error);
        const verbForErrorMessage = `ユーザーデータ`;
        const objectForErrorMessage = `取得`;
        getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
      } finally {
        setLoading(false);
      };
    };

    fetchUserData(userNameInUrl);

  }, [checkUserNameChange, userNameInUrl]);

  const nicknameRef = useRef();
  const usernameRef = useRef();
  const bioRef = useRef();
  const inputRefs = { nicknameRef, usernameRef, bioRef };

  const updateUserFunc = async (defaultUsername, user) => {
    try {
      setEditing(true);
      const response = await updateUser(defaultUsername, user);
      const userData = response.data.user;

      setUserData((prevState) => ({
        ...prevState,
        userBio: userData.bio,
        userNickName: userData.nickname,
        userName: userData.username,
      }));
      setBioAble(true);
      setIsButtonDisabled(false);
      setCheckUserNameChange(true);

      if (changeUserNameCheckAble) {
        navigateToSignIn(`/signIn`);
        await signout();
      };
    } catch (error) {
      console.error(`ユーザーデータの編集中にエラーが発生しました。: `, error);
      const verbForErrorMessage = `ユーザーデータ`;
      const objectForErrorMessage = `編集`;
      getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
    } finally {
      setEditing(false);
      setIsButtonDisabled(false);
    };
  };

  const changeUserNameFunc = async () => {
    const defaultUsername = userData.userName;
    const nickname = nicknameRef.current.value;
    const username = usernameRef.current.value;
    const bio = bioRef.current.value;
    const user = {
      nickname: nickname,
      username: username,
      bio: bio
    };

    setIsButtonDisabled(false);
    setChangeUserNameCheckAble(false);

    await updateUserFunc(defaultUsername, user);
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setIsButtonDisabled(true);

    const defaultUsername = userData.userName;
    const nickname = nicknameRef.current.value;
    const username = usernameRef.current.value;
    const bio = bioRef.current.value;
    const user = {
      nickname: nickname,
      username: username,
      bio: bio
    };

    if(defaultUsername === username) {
      updateUserFunc(defaultUsername, user);
    } else {
      setChangeUserNameCheckAble(true);
    };
  };

  const revertUserBioFunc = () => {
    setIsButtonDisabled(false);
    setChangeUserNameCheckAble(false);
    setBioAble(true);
  };

  const setBioAbleFunc = () => {
    setBioAble(false);
  };

  return {
    bioAble,
    changeUserNameCheckAble,
    changeUserNameFunc,
    editing,
    error,
    handleTextSubmit,
    inputRefs,
    isButtonDisabled,
    loading,
    revertUserBioFunc,
    setBioAbleFunc,
    userData,
    userNameInUrl
  };
};