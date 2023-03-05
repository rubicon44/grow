import { MainWithHeader } from '../mainWithHeader';
import { NotificationsListContainer } from '../../organisms/notifications/notificationsListContainer';

export const NotificationsTemplate = () => {
  return (
    <MainWithHeader>
      <NotificationsListContainer />
    </MainWithHeader>
  );
};