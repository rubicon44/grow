import { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FollowNotification } from "./FollowNotification";
import { LikeNotification } from "./LikeNotification";

export const NotificationsList = ({ notificationsData, currentUserName }) => {
  const { followVisitors, likeVisitors, notifications } = notificationsData;
  if (
    (!likeVisitors || likeVisitors.length === 0) &&
    (!followVisitors || followVisitors.length === 0)
  ) {
    return (
      <ListCover>
        <p>通知はありません。</p>
      </ListCover>
    );
  }
  return (
    <ListCover>
      <ul>
        {notifications.map((notification) => (
          <Fragment key={notification.id}>
            {notification.action === "like" &&
              likeVisitors.map(
                (visitor) =>
                  String(notification.visitorId) === String(visitor.id) && (
                    <NotificationCover key={visitor.id}>
                      <LikeNotification
                        currentUserName={currentUserName}
                        notification={notification}
                        visitor={visitor}
                      />
                    </NotificationCover>
                  )
              )}
            {notification.action === "follow" &&
              followVisitors.map(
                (visitor) =>
                  String(notification.visitorId) === String(visitor.id) && (
                    <NotificationCover key={visitor.id}>
                      <FollowNotification visitor={visitor} />
                    </NotificationCover>
                  )
              )}
          </Fragment>
        ))}
      </ul>
    </ListCover>
  );
};

NotificationsList.propTypes = {
  currentUserName: PropTypes.string.isRequired,
  notificationsData: PropTypes.shape({
    followVisitors: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string,
        bio: PropTypes.string,
        email: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      })
    ).isRequired,
    likeVisitors: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string,
        bio: PropTypes.string,
        email: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      })
    ).isRequired,
    notifications: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        taskId: PropTypes.string,
        visitedId: PropTypes.string.isRequired,
        visitorId: PropTypes.string.isRequired,
        action: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const ListCover = styled.div`
  padding: 20px;
`;

const NotificationCover = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;
