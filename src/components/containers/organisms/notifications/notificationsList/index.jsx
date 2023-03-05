import { NotificationListWrapperContainer } from './notificationListWrapperContainer';
import { TitleWithBackArrowHeader } from '../../../../presentational/molecules/header/titleWithBackArrowHeader';

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