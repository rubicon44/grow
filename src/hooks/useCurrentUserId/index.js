import { currentUser } from '../../infra/currentUser';
import Cookies from 'js-cookie';

export const useCurrentUserId = () => {
  const user = Cookies.get('user');
  if (user) {
    const id = currentUser().id;
    return id;
  }
  return null;
};