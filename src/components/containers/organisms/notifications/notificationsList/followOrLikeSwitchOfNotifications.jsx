import React from 'react';
import styled from 'styled-components';
import { FollowNotifications } from './followNotifications';
import { LikeNotifications } from './likeNotifications';

export const FollowOrLikeSwitchOfNotifications = ({ visitorsData, currentUserName }) => {
  const uniqueLikeVisitors = Array.from(
    new Map(visitorsData.likeVisitors.map((visitor) => [visitor.id, visitor])).values()
  );
  return (
    <UsersList>
      {visitorsData.notifications.map((notification) => (
        <React.Fragment key={notification.id}>
          <>
            {notification.action === "like" && (uniqueLikeVisitors.map((visitor) => (
              String(notification.visitor_id) === String(visitor.id) && (<LikeNotifications key={visitor.id} currentUserName={currentUserName} notification={notification} visitor={visitor} />)
            )))}
          </>
          <>
            {notification.action === "follow" && (visitorsData.visitors.map((visitor) => (
              String(notification.visitor_id) === String(visitor.id) && (<FollowNotifications key={visitor.id} visitor={visitor} />)
            )))}
          </>
        </React.Fragment>
      ))}
    </UsersList>
  )
}

const UsersList = styled.div`
  display: flex;
  flex-flow: column;
  text-align: left;
  &:not(:first-of-type) {
    margin-top: 10px;
  }
`;