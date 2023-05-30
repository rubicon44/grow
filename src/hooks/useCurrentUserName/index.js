import Cookies from "js-cookie";
import { currentUser } from "../../infra/currentUser";

export const useCurrentUserName = () => {
  const user = Cookies.get("user");
  if (user) {
    const { username } = currentUser();
    return username;
  }
  return null;
};
