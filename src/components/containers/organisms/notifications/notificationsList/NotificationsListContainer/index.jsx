import { useCurrentUserName } from 'hooks/useCurrentUserName';
import { useNotificationsData } from 'hooks/useNotificationsData';
import { NotificationsList } from 'components/containers/organisms/Notifications/NotificationsList';

export const NotificationsListContainer = () => {
  const currentUserName = useCurrentUserName();
  const { isLoading, notificationsData } = useNotificationsData();
  return <NotificationsList currentUserName={currentUserName} isLoading={isLoading} notificationsData={notificationsData} />;
};