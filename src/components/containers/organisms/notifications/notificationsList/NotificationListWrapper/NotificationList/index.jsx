import { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FollowNotification } from "./FollowNotification";
import { LikeNotification } from "./LikeNotification";

export const NotificationList = ({ notificationsData, currentUserName }) => {
  const { followVisitors, likeVisitors, notifications } = notificationsData;

  // todo: useNotificationsDataへ移動予定(全関連ロジックのカスタムHooksへの移動による可読性向上のため。)。
  // todo: & 再利用化予定
  const uniqueLikeVisitors = Array.from(
    new Map(likeVisitors.map((visitor) => [visitor.id, visitor])).values()
  );

  return (
    <UsersList>
      {notifications.map((notification) => (
        <Fragment key={notification.id}>
          {notification.action === "like" &&
            uniqueLikeVisitors.map(
              (visitor) =>
                String(notification.visitorId) === String(visitor.id) && (
                  <LikeNotification
                    key={visitor.id}
                    currentUserName={currentUserName}
                    notification={notification}
                    visitor={visitor}
                  />
                )
            )}
          {notification.action === "follow" &&
            followVisitors.map(
              (visitor) =>
                String(notification.visitorId) === String(visitor.id) && (
                  <FollowNotification key={visitor.id} visitor={visitor} />
                )
            )}
        </Fragment>
      ))}
    </UsersList>
  );
};

NotificationList.propTypes = {
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

const UsersList = styled.div`
  display: flex;
  flex-flow: column;
  text-align: left;
  &:not(:first-of-type) {
    margin-top: 10px;
  }
`;
