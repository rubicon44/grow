import { MainWithHeader } from '../mainWithHeader';
import { NotificationsListContainer } from '../../organisms/notifications/NotificationsListContainer';

export const NotificationsTemplate = () => {
  return (
    <MainWithHeader>
      <NotificationsListContainer />
    </MainWithHeader>
  );
};