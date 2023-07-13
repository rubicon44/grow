import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContextProvider";
import { useUserDataContext } from "../../context/UserDataContextProvider";
import { useCurrentUserId } from "../useCurrentUserId";
import { useCurrentUserName } from "../useCurrentUserName";
import { useInputSanitization } from "../useInputSanitization";
import { useInputValidation } from "../useInputValidation";
import { updateUser, uploadFileToS3 } from "../../infra/api";

export const useUserEdit = (setCheckUserNameChange) => {
  const navigateToSignIn = useNavigate();
  const { signout } = useContext(AuthContext);
  const currentUserId = useCurrentUserId();
  const currentUserName = useCurrentUserName();
  const { sanitizeInput } = useInputSanitization();
  const { validateInput } = useInputValidation();
  const [bioAble, setBioAble] = useState(true);
  const [changeUserNameCheckAble, setChangeUserNameCheckAble] = useState(false);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const nicknameRef = useRef();
  const usernameRef = useRef();
  const bioRef = useRef();
  const inputRefs = { nicknameRef, usernameRef, bioRef };

  const { userData, setUserData } = useUserDataContext();

  useEffect(() => {
    if (changeUserNameCheckAble) {
      document.body.style.overflow = "hidden";
      document.documentElement.scrollTop = 0;
      return () => {
        document.body.style.overflow = "visible";
      };
    }
    return () => {};
  }, [changeUserNameCheckAble]);

  const updateUserFunc = async (defaultUsername, user, currentUserId) => {
    try {
      setEditing(true);
      const response = await updateUser(defaultUsername, {
        user,
        currentUserId: Number(currentUserId),
      });

      const userData = response.data;
      const transformedUserData = {
        ...userData,
        id: userData.id.toString(),
      };

      setUserData((prevState) => ({
        ...prevState,
        ...transformedUserData,
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

  // fileオブジェクトを取得
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const newFileName = `${currentUserName}_${file.name}`;
    const fileWithUserName = new File([file], newFileName, { type: file.type });
    setFile(fileWithUserName);
  };

  // 画像upload関数
  const uploadAvatarToS3 = async (defaultUsername) => {
    try {
      if (file) {
        const avatarUrl = await uploadFileToS3(defaultUsername, file);
        const avatarUrlData = avatarUrl.data;
        return avatarUrlData;
      }
      return Promise.resolve();
    } catch (error) {
      console.error("Error uploading file to S3:", error);
      throw error;
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
    const avatarUrl = await uploadAvatarToS3();
    const user = { avatarUrl, nickname, username, bio };

    setChangeUserNameCheckAble(false);
    await updateUserFunc(defaultUsername, user, currentUserId);
  };

  // TODO: [未実装]メールアドレス変更機能
  const handleTextSubmit = async (e) => {
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
    const avatarUrl = await uploadAvatarToS3();
    const user = { avatarUrl, nickname, username, bio };

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
    handleFileChange,
    handleTextSubmit,
    inputRefs,
    isButtonDisabled,
    revertUserBioFunc,
    setBioAbleFunc,
  };
};
