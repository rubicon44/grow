import PropTypes from "prop-types";
import { NotificationListWrapper } from "../NotificationListWrapper";

// todo: 削除予定コンポーネント(ただpropsを渡しているだけのため。)。
export const NotificationListWrapperContainer = ({
  currentUserName,
  notificationsData,
}) => {
  return (
    <NotificationListWrapper
      currentUserName={currentUserName}
      notificationsData={notificationsData}
    />
  );
};

NotificationListWrapperContainer.propTypes = {
  currentUserName: PropTypes.string.isRequired,
  notificationsData: PropTypes.shape({
    followVisitors: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        bio: PropTypes.string,
        email: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      })
    ).isRequired,
    likeVisitors: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        bio: PropTypes.string,
        email: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      })
    ).isRequired,
    notifications: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        taskId: PropTypes.number,
        visitedId: PropTypes.number.isRequired,
        visitorId: PropTypes.number.isRequired,
        action: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
