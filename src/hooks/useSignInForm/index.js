import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'auth/AuthProvider';
import { useGetErrorMessage } from 'hooks/useGetErrorMessage';

export const useSignInForm = () => {
  const navigateToTasks = useNavigate();
  const { signin } = useContext(AuthContext);
  const { getErrorMessage } = useGetErrorMessage();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [signing, setSigning] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSigning(true);
    setIsButtonDisabled(true);

    try {
      const { email, password } = e.target.elements;
      await signin(email.value, password.value);
      await navigateToTasks('/tasks');
    } catch (error) {
      console.error(`ユーザーのログイン中にエラーが発生しました。: `, error);
      const verbForErrorMessage = `ユーザー`;
      const objectForErrorMessage = `ログイン`;
      getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
    } finally {
      setSigning(false);
      setIsButtonDisabled(false);
    };
  };

  return {
    handleSubmit,
    isButtonDisabled,
    signing,
  };
};