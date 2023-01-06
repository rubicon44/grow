import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getFollowers } from 'infra/api';

export const useFollowers = () => {
  const location = useLocation();
  const { userId } = location.state;
  const currentUserDataText = localStorage.getItem('user');
  const currentUserData = JSON.parse(currentUserDataText);
  const currentUserId = String(currentUserData.id);
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    let isMounted = true;
    const user_id = userId;
    getFollowers(user_id)
      .then((response) => {
        if (isMounted) setFollowers(response.data.followers);
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, [userId]);
  return { followers, currentUserId, userId };
};