import { currentUser } from 'infra/currentUser';

export const useCurrentUserId = () => {
  const user = localStorage.getItem('user');
  if (user) {
    const id = currentUser().id;
    return id;
  }
  return null;
};