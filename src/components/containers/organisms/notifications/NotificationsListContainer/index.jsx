import { useCurrentUserName } from '../../../../../hooks/useCurrentUserName';
import { useNotificationsData } from '../../../../../hooks/useNotificationsData';
import { NotificationsList } from '../notificationsList';

export const NotificationsListContainer = () => {
  const currentUserName = useCurrentUserName();
  const { error, loading, notificationsData } = useNotificationsData();
  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return <NotificationsList currentUserName={currentUserName} notificationsData={notificationsData} />;
};