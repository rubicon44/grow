import { currentUser } from '../../infra/currentUser';

export const useCurrentUserName = () => {
  if(localStorage.getItem('user')) {
    const username = currentUser().username;
    return username;
  };
  return null;
};