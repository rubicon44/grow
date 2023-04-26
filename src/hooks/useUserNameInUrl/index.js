import { useLocation } from 'react-router-dom';

export const useUserNameInUrl = () => {
  const location = useLocation();
  const match = location.pathname.match(/^\/([^/]+)/);
  const userNameInUrl = match ? match[1] : null;
  return { userNameInUrl };
};