import Cookies from "js-cookie";

export const currentUser = () => {
  let currentUserData;
  let currentUserId;
  let currentUserName;
  let returnCurrentUserData;
  const user = Cookies.get("user");
  if (user) {
    currentUserData = JSON.parse(user);
    currentUserId = currentUserData.id;
    currentUserName = currentUserData.username;
    returnCurrentUserData = { id: currentUserId, username: currentUserName };
  }
  return returnCurrentUserData;
};
