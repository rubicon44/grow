import { useEffect, useState } from "react";
import { useCurrentUserId } from "../useCurrentUserId";
import { useGetErrorMessage } from "../useGetErrorMessage";
import { getNotifications } from "../../infra/api";

export const useNotificationsData = () => {
  const currentUserId = useCurrentUserId();
  const { getErrorMessage } = useGetErrorMessage();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notificationsData, setNotificationsData] = useState({
    followVisitors: [],
    likeVisitors: [],
    notifications: [],
  });

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      setError(null);
      const user = { userId: currentUserId };
      try {
        const response = await getNotifications(user);
        const notificationsData = response.data;
        setNotificationsData({
          followVisitors: notificationsData.followVisitors,
          likeVisitors: notificationsData.likeVisitors,
          notifications: notificationsData.notifications,
        });
      } catch (error) {
        setError(error);
        console.error(`通知一覧の取得中にエラーが発生しました。: `, error);
        const verbForErrorMessage = `通知一覧`;
        const objectForErrorMessage = `取得`;
        getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
      } finally {
        setLoading(false);
      }
      // todo: Consider about array of dependencies of useCallback later.
    };
    fetchNotifications();
  }, [currentUserId, getErrorMessage]);

  return { error, loading, notificationsData };
};
