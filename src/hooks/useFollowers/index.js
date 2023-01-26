import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { getFollowers } from 'infra/api';

export const useFollowers = () => {
  const location = useLocation();
  const { username } = location.state;
  const currentUserId = useCurrentUserId();
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getFollowers(username)
      .then((response) => {
        if (isMounted) setFollowers(response.data.followers);
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, []);
  return { followers, currentUserId, username };
};