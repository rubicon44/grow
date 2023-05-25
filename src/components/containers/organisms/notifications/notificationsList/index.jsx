import PropTypes from "prop-types";
import { NotificationListWrapperContainer } from "./NotificationListWrapperContainer";

export const NotificationsList = ({ currentUserName, notificationsData }) => (
  <NotificationListWrapperContainer
    currentUserName={currentUserName}
    notificationsData={notificationsData}
  />
);

NotificationsList.defaultProps = {
  notificationsData: null,
};

NotificationsList.propTypes = {
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
  }),
};
