import React, { useState, useEffect } from 'react';
import { getNotifications } from '../../../../infra/api';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../../../presentational/atoms/Title/title';
import { BackButton } from '../../../presentational/atoms/Button/backButton';

export function NotificationsList() {
  // todo: 別ファイルからの呼び出しで、行数削減できそう。
  const currentUserDataText = localStorage.getItem('user');
  const currentUserData = JSON.parse(currentUserDataText);
  const currentUserId = String(currentUserData.id);
  const currentUserName = String(currentUserData.username);

  const [notifications, setNotifications] = useState([]);
  const [visitors, setVisitors] = useState([]);
  const [likeVisitors, setLikeVisitors] = useState([]);
  useEffect(() => {
    let isMounted = true;
    const user = { user_id: currentUserId };
    getNotifications(user)
      .then((response) => {
        if (isMounted) setNotifications(response.data.notifications);
        if (isMounted) setVisitors(response.data.follow_visitors);
        if (isMounted) setLikeVisitors(response.data.like_visitors);
      })
      .catch();
    // .catch(() => {
    // });
    return () => {
      isMounted = false;
    };
  }, [currentUserId]);

  const uniqueLikeVisitors = Array.from(
    new Map(likeVisitors.map((visitor) => [visitor.id, visitor])).values()
  );

  return (
    <>
      <ListHeader>
        <BackButton />
        <Title title="通知一覧" />
      </ListHeader>
      <ListCover>
        {notifications == null || notifications == '' ? (
          <div>通知はありません。</div>
        ) : (
          <UsersList>
            {notifications.map((notification) => (
              <React.Fragment key={notification.id}>
                <>
                  {notification.action === "like" && (
                    uniqueLikeVisitors.map((visitor) => (
                      String(notification.visitor_id) === String(visitor.id) && (
                        <div key={visitor.id}>
                          あなたの
                          <UserNickName to={`/${currentUserName}/tasks/${notification.task_id}`}>タスク</UserNickName>
                          が
                          <UserNickName to={`/${visitor.username}`}>{visitor.nickname}</UserNickName>
                          にいいねされました。
                        </div>
                      )
                    ))
                  )}
                </>
                <>
                  {notification.action === "follow" && (
                    visitors.map((visitor) => (
                      String(notification.visitor_id) === String(visitor.id) && (
                        <div key={visitor.id}>
                          <UserNickName to={`/${visitor.username}`}>{visitor.nickname}</UserNickName>
                          さんにフォローされました。
                        </div>
                      )
                    ))
                  )}
                </>
              </React.Fragment>
            ))}
          </UsersList>
        )}
      </ListCover>
    </>
  );
}

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;

const ListHeader = styled.div`
  display: flex;
  width: 100%;

  > h2 {
    width: 100%;
    margin-right: 45px;
  }
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