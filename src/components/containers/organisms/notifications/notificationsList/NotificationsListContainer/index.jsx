import { useCurrentUserName } from 'hooks/useCurrentUserName';
import { useNotificationsData } from 'hooks/useNotificationsData';
import { NotificationsList } from 'components/containers/organisms/Notifications/NotificationsList';

export const NotificationsListContainer = () => {
  const currentUserName = useCurrentUserName();
  const { error, loading, notificationsData } = useNotificationsData();

  return <NotificationsList currentUserName={currentUserName} error={error} loading={loading} notificationsData={notificationsData} />;
};