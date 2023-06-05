import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import { useCurrentUserId } from "../useCurrentUserId";
import { useInputSanitization } from "../useInputSanitization";
import { useInputValidation } from "../useInputValidation";
import { updateUser } from "../../infra/api";

export const useUserEdit = (setCheckUserNameChange, setUserData, userData) => {
  const navigateToSignIn = useNavigate();
  const { signout } = useContext(AuthContext);
  const currentUserId = useCurrentUserId();
  const { sanitizeInput } = useInputSanitization();
  const { validateInput } = useInputValidation();
  const [bioAble, setBioAble] = useState(true);
  const [changeUserNameCheckAble, setChangeUserNameCheckAble] = useState(false);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const nicknameRef = useRef();
  const usernameRef = useRef();
  const bioRef = useRef();
  const inputRefs = { nicknameRef, usernameRef, bioRef };

  const updateUserFunc = async (defaultUsername, user, currentUserId) => {
    try {
      setEditing(true);
      const response = await updateUser(defaultUsername, {
        user,
        currentUserId: Number(currentUserId),
      });
      const userData = response.data;

      setUserData((prevState) => ({
        ...prevState,
        bio: userData.bio,
        nickname: userData.nickname,
        username: userData.username,
      }));
      setBioAble(true);
      setCheckUserNameChange(true);

      if (changeUserNameCheckAble) {
        navigateToSignIn(`/signIn`);
        await signout();
      }
    } catch (error) {
      setError(error);
    } finally {
      setEditing(false);
      setIsButtonDisabled(false);
    }
  };

  // usernameが変更された場合
  const changeUserNameFunc = async () => {
    const defaultUsername = userData.username;
    const nickname = sanitizeInput(nicknameRef.current.value, { trim: true });
    const username = sanitizeInput(usernameRef.current.value, { trim: true });
    const bio = sanitizeInput(bioRef.current.value);

    if (
      !validateInput(nickname, "ニックネーム", {
        maxLength: 50,
        minLength: 15,
        nullFalse: false,
      }) ||
      !validateInput(username, "ユーザーネーム", {
        maxLength: 15,
        nullFalse: false,
      }) ||
      !validateInput(bio, "プロフィール", { maxLength: 160 })
    ) {
      setIsButtonDisabled(false);
      return;
    }
    const user = { nickname, username, bio };

    setChangeUserNameCheckAble(false);
    await updateUserFunc(defaultUsername, user, currentUserId);
  };

  // todo: [未実装]メールアドレス変更機能
  const handleTextSubmit = (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    const defaultUsername = userData.username;
    const nickname = sanitizeInput(nicknameRef.current.value, { trim: true });
    const username = sanitizeInput(usernameRef.current.value, { trim: true });
    const bio = sanitizeInput(bioRef.current.value);

    if (
      !validateInput(nickname, "ニックネーム", {
        maxLength: 50,
        nullFalse: false,
      }) ||
      !validateInput(username, "ユーザーネーム", {
        maxLength: 15,
        nullFalse: false,
      }) ||
      !validateInput(bio, "プロフィール", { maxLength: 160 })
    ) {
      setIsButtonDisabled(false);
      return;
    }
    const user = { nickname, username, bio };

    if (defaultUsername === username) {
      updateUserFunc(defaultUsername, user, currentUserId);
    } else {
      setChangeUserNameCheckAble(true);
    }
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
    revertUserBioFunc,
    setBioAbleFunc,
  };
};
