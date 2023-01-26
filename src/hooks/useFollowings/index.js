import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { getFollowings } from 'infra/api';

export const useFollowings = () => {
  const location = useLocation();
  const { username } = location.state;
  const currentUserId = useCurrentUserId();
  const [followings, setFollowings] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getFollowings(username)
      .then((response) => {
        if (isMounted) setFollowings(response.data.followings);
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, []);
  return { followings, currentUserId, username };
};