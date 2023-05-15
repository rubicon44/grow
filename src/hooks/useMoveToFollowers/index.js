import { useNavigate } from 'react-router-dom';

export const useMoveToFollowers = (userData) => {
  const navigateToFollowers = useNavigate();
  const moveToFollowers = () => {
    navigateToFollowers(`/${userData.username}/followers`, {
      state: {
        username: userData.username,
      },
    });
  };

  return {
    moveToFollowers,
  };
};