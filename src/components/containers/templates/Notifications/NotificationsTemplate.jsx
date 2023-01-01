import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { NotificationsListContainer } from 'components/containers/organisms/Notifications/NotificationsList/NotificationsListContainer';

export const NotificationsTemplate = () => {
  return (
    <MainWithHeader>
      <NotificationsListContainer />
    </MainWithHeader>
  );
};