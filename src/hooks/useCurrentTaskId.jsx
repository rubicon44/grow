import { useLocation } from 'react-router-dom';

export const useCurrentTaskId = () => {
  const location = useLocation();
  const locationPathName = location.pathname.split('/');
  const currentTaskId = locationPathName[locationPathName.length - 1];
  return currentTaskId;
};