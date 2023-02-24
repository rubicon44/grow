import { useNavigate } from 'react-router-dom';

export const useMoveToFollowers = (userData) => {
  const navigateToFollowers = useNavigate();
  const moveToFollowers = () => {
    navigateToFollowers(`/${userData.taskUser.username}/followers`, {
      state: {
        username: userData.taskUser.username,
      },
    });
  };

  return {
    moveToFollowers,
  };
};