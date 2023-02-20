import { useEffect, useState } from 'react';
import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { getNotifications } from 'infra/api';

export const useNotificationsData = () => {
  const currentUserId = useCurrentUserId();
  const [isLoading, setIsLoading] = useState(false);
  const [notificationsData, setNotificationsData] = useState({
    notifications: [],
    visitors: [],
    likeVisitors: [],
  });
  useEffect(() => {
    let isMounted = true;
    const user = { user_id: currentUserId };
    getNotifications(user)
      .then((response) => {
        if (isMounted) setNotificationsData({
          notifications: response.data.notifications,
          visitors: response.data.follow_visitors,
          likeVisitors: response.data.like_visitors,
        });
        if (isMounted) setIsLoading(true);
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, [currentUserId]);
  return { notificationsData, isLoading };
};