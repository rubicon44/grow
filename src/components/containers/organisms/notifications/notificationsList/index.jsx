import { NotificationListWrapperContainer } from 'components/containers/organisms/Notifications/NotificationList/NotificationListWrapper/NotificationListWrapperContainer';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const NotificationsList = ({ currentUserName, error, loading, notificationsData }) => {
  return (
    <>
      <TitleWithBackArrowHeader>通知一覧</TitleWithBackArrowHeader>
      <NotificationListWrapperContainer
        error={error}
        currentUserName={currentUserName}
        loading={loading}
        notificationsData={notificationsData}
      />
    </>
  );
};