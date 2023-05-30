import { useLocation } from "react-router-dom";

export const useCurrentPathSegment = () => {
  const location = useLocation();
  const match = location.pathname.match(/^\/([^/]+)/);
  const currentPathSegment = match ? match[1] : null;
  return { currentPathSegment };
};
