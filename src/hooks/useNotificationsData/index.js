import { useEffect, useState } from "react";
import { useCurrentUserId } from "../useCurrentUserId";
import { useGetErrorMessage } from "../useGetErrorMessage";
import { getNotifications } from "../../infra/api";

export const useNotificationsData = () => {
  const currentUserId = useCurrentUserId();
  const { getErrorMessage } = useGetErrorMessage();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notificationsData, setNotificationsData] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      setError(null);
      const user = { userId: currentUserId };
      try {
        const response = await getNotifications(user);
        const notificationsData = response.data;
        const transformedNotificationsData = {
          followVisitors: notificationsData.followVisitors.map((visitor) => ({
            ...visitor,
            id: visitor.id.toString(),
          })),
          likeVisitors: notificationsData.likeVisitors.map((visitor) => ({
            ...visitor,
            id: visitor.id.toString(),
          })),
          notifications: notificationsData.notifications.map(
            (notification) => ({
              ...notification,
              id: notification.id.toString(),
              taskId:
                notification.taskId !== null
                  ? notification.taskId.toString()
                  : null,
              visitedId: notification.visitedId.toString(),
              visitorId: notification.visitorId.toString(),
            })
          ),
        };

        setNotificationsData(transformedNotificationsData);
      } catch (error) {
        setError(error);
        const verbForErrorMessage = `通知一覧`;
        const objectForErrorMessage = `取得`;
        getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();
  }, [currentUserId, getErrorMessage]);

  return { error, loading, notificationsData };
};
