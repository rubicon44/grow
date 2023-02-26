import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'auth/AuthProvider';
import { useGetErrorMessage } from 'hooks/useGetErrorMessage';

export const useSignOut = () => {
  const navigate = useNavigate();
  const { signout } = useContext(AuthContext);
  const { getErrorMessage } = useGetErrorMessage();

  const handleSignout = async () => {
    try {
      await signout();
      await navigate('/');
    } catch (error) {
      console.error(`ユーザーのログアウト中にエラーが発生しました。: `, error);
      const verbForErrorMessage = `ユーザー`;
      const objectForErrorMessage = `ログアウト`;
      getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
    };
  };
  return { handleSignout };
};