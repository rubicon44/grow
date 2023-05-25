import { useCurrentUserName } from "../../../../../hooks/useCurrentUserName";
import { useNotificationsData } from "../../../../../hooks/useNotificationsData";
import { NotificationsList } from "../notificationsList";

export const NotificationsListContainer = () => {
  const currentUserName = useCurrentUserName();
  const { error, notificationsData } = useNotificationsData();
  if (error) return <>Error...</>;
  if (notificationsData === null) {
    return null;
  }
  return (
    <NotificationsList
      currentUserName={currentUserName}
      notificationsData={notificationsData}
    />
  );
};
