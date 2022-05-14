import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getFollowers } from '../../../../infra/api';
import { UserFollowersTemplate } from '../../templates/users/followers';

export function UserFollowers() {
  const location = useLocation();
  const { userId } = location.state;
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const user_id = userId;
    getFollowers(user_id)
      .then((response) => {
        if (isMounted) setFollowers(response.data.followers);
      })
      .catch();
    // .catch(() => {
    // });
    return () => {
      isMounted = false;
    };
  }, [userId]);

  return <UserFollowersTemplate followers={followers} />;
}