import { useNavigate } from 'react-router-dom';

export const useMoveToFollowings = (userData) => {
  const navigateToFollowings = useNavigate();
  const moveToFollowings = () => {
    navigateToFollowings(`/${userData.taskUser.username}/followings`, {
      state: {
        username: userData.taskUser.username,
      },
    });
  };

  return {
    moveToFollowings,
  };
};