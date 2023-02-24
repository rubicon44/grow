import { useLocation } from 'react-router-dom';

export const useUserNameInUrl = () => {
  const location = useLocation();
  const locationPathName = location.pathname.split('/');
  const userNameInUrl = locationPathName[locationPathName.length - 1];

  return { userNameInUrl };
};