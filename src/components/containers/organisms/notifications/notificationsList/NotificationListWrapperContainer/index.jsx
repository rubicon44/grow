import PropTypes from 'prop-types';
import { NotificationListWrapper } from '../NotificationListWrapper';

// todo: 削除予定コンポーネント(ただpropsを渡しているだけのため。)。
export const NotificationListWrapperContainer = ({ currentUserName, notificationsData }) => {
  return <NotificationListWrapper
           currentUserName={currentUserName}
           notificationsData={notificationsData}
         />;
};

NotificationListWrapperContainer.propTypes = {
  currentUserName: PropTypes.string.isRequired,
  notificationsData: PropTypes.shape({
    followVisitors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      bio: PropTypes.string,
      email: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      paswword_digest: PropTypes.string,
      username: PropTypes.string.isRequired,
    })).isRequired,
    likeVisitors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
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
  }).isRequired,
};