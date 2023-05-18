import { useNavigate } from "react-router-dom";

export const useMoveToFollowings = (userData) => {
  const navigateToFollowings = useNavigate();
  const moveToFollowings = () => {
    navigateToFollowings(`/${userData.username}/followings`, {
      state: {
        username: userData.username,
      },
    });
  };

  return {
    moveToFollowings,
  };
};
