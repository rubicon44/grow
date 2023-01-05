import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'auth/AuthProvider';

export const useSignOut = () => {
  const navigate = useNavigate();
  const { signout } = useContext(AuthContext);

  const signoutFunc = async () => {
    await navigate('/');
    await signout();
  };
  return { signoutFunc };
};