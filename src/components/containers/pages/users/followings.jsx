import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getFollowings } from '../../../../infra/api';
import { UserFollowingsTemplate } from '../../templates/users/followings';

export function UserFollowings() {
  const location = useLocation();
  const { userId } = location.state;
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const user_id = userId;
    getFollowings(user_id)
      .then((response) => {
        if (isMounted) setFollowings(response.data.followings);
      })
      .catch();
    // .catch(() => {
    // });
    return () => {
      isMounted = false;
    };
  }, [userId]);

  return <UserFollowingsTemplate followings={followings} userId={userId} />;
}