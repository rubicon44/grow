import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getNotifications } from '../../../../infra/api';
import { currentUser } from '../../../../infra/currentUser';
import { TitleWithBackArrowHeader } from '../../../presentational/molecules/Header/titleWithBackArrowHeader';

export const NotificationsList = () => {
  const currentUserId = currentUser().id;
  const currentUserName = currentUser().username;
  const [isLoading, setIsLoading] = useState(false);
  const [visitorsData, setVisitorsData] = useState({
    notifications: [],
    visitors: [],
    likeVisitors: [],
  });
  useEffect(() => {
    let isMounted = true;
    const user = { user_id: currentUserId };
    getNotifications(user)
      .then((response) => {
        if (isMounted) setVisitorsData({
          notifications: response.data.notifications,
          visitors: response.data.follow_visitors,
          likeVisitors: response.data.like_visitors,
        });
        if (isMounted) setIsLoading(true);
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, [currentUserId]);

  const uniqueLikeVisitors = Array.from(
    new Map(visitorsData.likeVisitors.map((visitor) => [visitor.id, visitor])).values()
  );

  // todo: UIとロジックの関数が一緒の場所にあるのは気持ちが悪い(styleも一緒)。別に切り出せないものか。
  const NotificaitonsLikeFunc = ({ notification, visitor }) => {
    return (
      <>
        あなたの<UserNickName to={`/${currentUserName}/tasks/${notification.task_id}`}>タスク</UserNickName>が
        <UserNickName to={`/${visitor.username}`}>{visitor.nickname}</UserNickName>にいいねされました。
      </>
    )
  }

  const NotificaitonsFollowFunc = ({ visitor }) => {
    return (
      <>
        <UserNickName to={`/${visitor.username}`}>{visitor.nickname}</UserNickName>さんにフォローされました。
      </>
    )
  }

  const NotificationsListFunc = () => {
    return (
      <UsersList>
        {visitorsData.notifications.map((notification) => (
          <React.Fragment key={notification.id}>
            <>
              {notification.action === "like" && (uniqueLikeVisitors.map((visitor) => (
                String(notification.visitor_id) === String(visitor.id) && (<NotificaitonsLikeFunc key={visitor.id} notification={notification} visitor={visitor} />)
              )))}
            </>
            <>
              {notification.action === "follow" && (visitorsData.visitors.map((visitor) => (
                String(notification.visitor_id) === String(visitor.id) && (<NotificaitonsFollowFunc key={visitor.id} visitor={visitor} />)
              )))}
            </>
          </React.Fragment>
        ))}
      </UsersList>
    )
  }

  return (
    <>
      <TitleWithBackArrowHeader>通知一覧</TitleWithBackArrowHeader>
      {isLoading ? (
        <ListCover>
          {visitorsData.notifications == null || visitorsData.notifications == '' ? (<div>通知はありません。</div>) : (<NotificationsListFunc />)}
        </ListCover>
      ) : (<>ロード中です...</>)}
    </>
  );
}

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;

const UsersList = styled.div`
  display: flex;
  flex-flow: column;
  text-align: left;
  &:not(:first-of-type) {
    margin-top: 10px;
  }
  > div {
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
  }
`;

const UserNickName = styled(Link)`
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
`;