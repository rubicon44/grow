import { useCurrentUserName } from 'hooks/useCurrentUserName';
import { useVisitorsData } from 'hooks/useVisitorsData';
import { NotificationsList } from 'components/containers/organisms/Notifications/NotificationsList';

export const NotificationsListContainer = () => {
  const currentUserName = useCurrentUserName();
  const [visitorsData, { isLoading }] = useVisitorsData();

  return <NotificationsList currentUserName={currentUserName} isLoading={isLoading} visitorsData={visitorsData} />;
};