export const currentUser = () => {
  let currentUserData;
  let currentUserId;
  let currentUserName;
  let returnCurrentUserData;
  if(localStorage.getItem('user')) {
    currentUserData = JSON.parse(localStorage.getItem('user'));
    currentUserId = String(currentUserData.id);
    currentUserName = String(currentUserData.username);
    returnCurrentUserData = { id: currentUserId, username: currentUserName };
  }
  return returnCurrentUserData;
}