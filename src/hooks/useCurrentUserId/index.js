import Cookies from "js-cookie";
import { currentUser } from "../../infra/currentUser";

export const useCurrentUserId = () => {
  const user = Cookies.get("user");
  if (user) {
    const { id } = currentUser();
    return id.toString();
  }
  return null;
};
