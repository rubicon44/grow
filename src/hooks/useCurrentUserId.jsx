import { currentUser } from 'infra/currentUser';

export const useCurrentUserId = () => {
  if(localStorage.getItem('user')) {
    const id = currentUser().id;
    return id;
  }
  return null;
};