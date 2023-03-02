import { MainWithHeader } from '../MainWithHeader';
import { NotificationsListContainer } from '../../organisms/Notifications/NotificationsListContainer';

export const NotificationsTemplate = () => {
  return (
    <MainWithHeader>
      <NotificationsListContainer />
    </MainWithHeader>
  );
};