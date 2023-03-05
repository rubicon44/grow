import { NotificationListWrapper } from '../notificationListWrapper';

export const NotificationListWrapperContainer = ({ currentUserName, error, loading, notificationsData }) => {

  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return <NotificationListWrapper
           currentUserName={currentUserName}
           notificationsData={notificationsData}
         />;
};