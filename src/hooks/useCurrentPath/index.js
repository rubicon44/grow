import { useLocation } from "react-router-dom";

export const useCurrentPath = () => {
  const location = useLocation();
  // const match = location.pathname.match(/^\/([^/]+)/);
  const match = location.pathname.match(/^\/(.+)/);
  const currentPath = match ? match[1] : null;
  return { currentPath };
};
