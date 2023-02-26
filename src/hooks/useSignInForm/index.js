import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'auth/AuthProvider';
import { useGetErrorMessage } from 'hooks/useGetErrorMessage';

export const useSignInForm = () => {
  const navigateToTasks = useNavigate();
  const { signin } = useContext(AuthContext);
  const { getErrorMessage } = useGetErrorMessage();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    try {
      await navigateToTasks('/tasks');
      const { email, password } = e.target.elements;
      await signin(email.value, password.value);
    } catch (error) {
      console.error(`ユーザーのログイン中にエラーが発生しました。: `, error);
      const verbForErrorMessage = `ユーザー`;
      const objectForErrorMessage = `ログイン`;
      getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
    } finally {
      setIsButtonDisabled(false);
    };
  };
  return { handleSubmit, isButtonDisabled };
};