import { useCallback, useEffect, useState } from 'react';
import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { useGetErrorMessage } from 'hooks/useGetErrorMessage';
import { getNotifications } from 'infra/api';

export const useNotificationsData = () => {
  const currentUserId = useCurrentUserId();
  const { getErrorMessage } = useGetErrorMessage();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notificationsData, setNotificationsData] = useState({
    notifications: [],
    visitors: [],
    likeVisitors: [],
  });

  const fetchNotifications = useCallback(async () => {
    setLoading(true);
    setError(null);
    const user = { user_id: currentUserId };
    try {
      const response = await getNotifications(user)
      const notificationsData = response.data;
      setNotificationsData({
        notifications: notificationsData.notifications,
        visitors: notificationsData.follow_visitors,
        likeVisitors: notificationsData.like_visitors,
      });
    } catch (error) {
      setError(error);
      console.error(`通知一覧の取得中にエラーが発生しました。: `, error);
      const verbForErrorMessage = `通知一覧`;
      const objectForErrorMessage = `取得`;
      getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
    } finally {
      setLoading(false);
    };
    // todo: Consider about array of dependencies of useCallback later.
  }, [currentUserId, getNotifications]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  return { error, loading, notificationsData };
};