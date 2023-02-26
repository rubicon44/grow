import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from 'auth/AuthProvider';
import { useGetErrorMessage } from 'hooks/useGetErrorMessage';

export const useSignInForm = () => {
  const navigateToTasks = useNavigate();
  const location = useLocation();
  const locationPathName = location.pathname.split('/');
  const tasksText = locationPathName[locationPathName.length - 1];
  const { signin } = useContext(AuthContext);
  const { getErrorMessage } = useGetErrorMessage();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    try {
      const { email, password } = e.target.elements;
      await signin(email.value, password.value);

      if(tasksText === "tasks") {
        window.location.reload();
      } else {
        await navigateToTasks('/tasks');
      };
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