import Cookies from 'js-cookie';

export const currentUser = () => {
  let currentUserData;
  let currentUserId;
  let currentUserName;
  let returnCurrentUserData;
  const user = Cookies.get('user');
  if (user) {
    currentUserData = JSON.parse(user);
    currentUserId = String(currentUserData.id);
    currentUserName = String(currentUserData.username);
    returnCurrentUserData = { id: currentUserId, username: currentUserName };
  }
  return returnCurrentUserData;
};