import { currentUser } from '../../infra/currentUser';
import Cookies from 'js-cookie';

export const useCurrentUserName = () => {
  const user = Cookies.get('user');
  if (user) {
    const username = currentUser().username;
    return username;
  }
  return null;
};