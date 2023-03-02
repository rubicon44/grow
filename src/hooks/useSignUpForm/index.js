import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthProvider';
import { useGetErrorMessage } from '../useGetErrorMessage';

export const useSignUpForm = () => {
  const navigateToTasks = useNavigate();
  const { signup } = useContext(AuthContext);
  const { getErrorMessage } = useGetErrorMessage();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [signuping, setSignuping] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSignuping(true);
    setIsButtonDisabled(true);

    try {
      const { nickname, username, email, password } = e.target.elements;
      await signup(nickname.value, username.value, email.value, password.value);
      await navigateToTasks('/tasks');
    } catch (error) {
      console.error(`ユーザーのサインアップ中にエラーが発生しました。: `, error);
      const verbForErrorMessage = `ユーザー`;
      const objectForErrorMessage = `サインアップ`;
      getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
    } finally {
      setSignuping(false);
      setIsButtonDisabled(false);
    };
  };

  return {
    handleSubmit,
    isButtonDisabled,
    signuping,
  };
};