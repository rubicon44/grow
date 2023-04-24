import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthProvider';
import { useGetErrorMessage } from '../useGetErrorMessage';
import { updateUser } from '../../infra/api';

// todo: Keep the following code within 100 lines later.
export const useUserEdit = (setCheckUserNameChange, setUserData, userData) => {
  const navigateToSignIn = useNavigate();
  const { signout } = useContext(AuthContext);
  const { getErrorMessage } = useGetErrorMessage();
  const [bioAble, setBioAble] = useState(true);
  const [changeUserNameCheckAble, setChangeUserNameCheckAble] = useState(false);
  const [editing, setEditing] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const nicknameRef = useRef();
  const usernameRef = useRef();
  const bioRef = useRef();
  const inputRefs = { nicknameRef, usernameRef, bioRef };

  const updateUserFunc = async (defaultUsername, user) => {
    try {
      setEditing(true);
      const response = await updateUser(defaultUsername, user);
      const userData = response.data;

      setUserData((prevState) => ({
        ...prevState,
        userBio: userData.bio,
        userNickName: userData.nickname,
        userName: userData.username,
      }));
      setBioAble(true);
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

    setChangeUserNameCheckAble(false);
    await updateUserFunc(defaultUsername, user);
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
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
    handleTextSubmit,
    inputRefs,
    isButtonDisabled,
    revertUserBioFunc,
    setBioAbleFunc,
  };
};