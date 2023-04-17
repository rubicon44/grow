import PropTypes from 'prop-types';
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

NotificationsList.propTypes = {
  currentUserName: PropTypes.string.isRequired,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  notificationsData: PropTypes.shape({
    likeVisitors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      firebase_id: PropTypes.string.isRequired,
      bio: PropTypes.string,
      email: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      paswword_digest: PropTypes.string,
      username: PropTypes.string.isRequired,
    })).isRequired,
    notifications: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      task_id: PropTypes.number,
      visited_id: PropTypes.number.isRequired,
      visitor_id: PropTypes.number.isRequired,
      action: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })).isRequired,
    visitors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      firebase_id: PropTypes.string.isRequired,
      bio: PropTypes.string,
      email: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      paswword_digest: PropTypes.string,
      username: PropTypes.string.isRequired,
    })).isRequired,
  }),
};