import { NotificationListWrapperContainer } from './NotificationListWrapperContainer';
import { TitleWithBackArrowHeader } from '../../../../presentational/molecules/Header/TitleWithBackArrowHeader';

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