import { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FollowNotification } from './FollowNotification';
import { LikeNotification } from './LikeNotification';

export const NotificationList = ({ notificationsData, currentUserName }) => {
  const { notifications, visitors, likeVisitors } = notificationsData;

  const uniqueLikeVisitors = Array.from(
    new Map(likeVisitors.map((visitor) => [visitor.id, visitor])).values()
  );

  return (
    <UsersList>
      {notifications.map((notification) => (
        <Fragment key={notification.id}>
          {notification.action === "like" && (uniqueLikeVisitors.map((visitor) => (
            String(notification.visitor_id) === String(visitor.id) && (<LikeNotification key={visitor.id} currentUserName={currentUserName} notification={notification} visitor={visitor} />)
          )))}
          {notification.action === "follow" && (visitors.map((visitor) => (
            String(notification.visitor_id) === String(visitor.id) && (<FollowNotification key={visitor.id} visitor={visitor} />)
          )))}
        </Fragment>
      ))}
    </UsersList>
  );
};

NotificationList.propTypes = {
  currentUserName: PropTypes.string.isRequired,
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

const UsersList = styled.div`
  display: flex;
  flex-flow: column;
  text-align: left;
  &:not(:first-of-type) {
    margin-top: 10px;
  }
`;