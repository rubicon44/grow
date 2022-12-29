import { Fragment } from 'react';
import styled from 'styled-components';
import { FollowNotification } from 'components/containers/organisms/Notifications/NotificationList/FollowNotification';
import { LikeNotification } from 'components/containers/organisms/Notifications/NotificationList/LikeNotification';

export const NotificationList = ({ visitorsData, currentUserName }) => {
  const uniqueLikeVisitors = Array.from(
    new Map(visitorsData.likeVisitors.map((visitor) => [visitor.id, visitor])).values()
  );
  return (
    <UsersList>
      {visitorsData.notifications.map((notification) => (
        <Fragment key={notification.id}>
          <>
            {notification.action === "like" && (uniqueLikeVisitors.map((visitor) => (
              String(notification.visitor_id) === String(visitor.id) && (<LikeNotification key={visitor.id} currentUserName={currentUserName} notification={notification} visitor={visitor} />)
            )))}
          </>
          <>
            {notification.action === "follow" && (visitorsData.visitors.map((visitor) => (
              String(notification.visitor_id) === String(visitor.id) && (<FollowNotification key={visitor.id} visitor={visitor} />)
            )))}
          </>
        </Fragment>
      ))}
    </UsersList>
  );
}

const UsersList = styled.div`
  display: flex;
  flex-flow: column;
  text-align: left;
  &:not(:first-of-type) {
    margin-top: 10px;
  }
`;