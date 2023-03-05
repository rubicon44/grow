import { MainWithHeader } from '../MainWithHeader';
import { NotificationsListContainer } from '../../organisms/notifications/NotificationsListContainer';

export const NotificationsTemplate = () => {
  return (
    <MainWithHeader>
      <NotificationsListContainer />
    </MainWithHeader>
  );
};