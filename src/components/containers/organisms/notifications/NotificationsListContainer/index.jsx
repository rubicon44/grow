import { useCurrentUserName } from "../../../../../hooks/useCurrentUserName";
import { useGetErrorMessage } from "../../../../../hooks/useGetErrorMessage";
import { useNotificationsData } from "../../../../../hooks/useNotificationsData";
import { ErrorMessage } from "../../common/ErrorMessage";
import { NotificationsList } from "..";

export const NotificationsListContainer = () => {
  const currentUserName = useCurrentUserName();
  const { getErrorMessage } = useGetErrorMessage();
  const { error, notificationsData } = useNotificationsData();

  if (error) return <ErrorMessage errorMessage={getErrorMessage(error)} />;
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
