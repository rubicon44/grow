import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getNotifications } from '../../../../../infra/api';
import { currentUser } from '../../../../../infra/currentUser';
import { NotificationList } from '../notificationList';
import { TitleWithBackArrowHeader } from '../../../../presentational/molecules/Header/TitleWithBackArrowHeader';

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

  return (
    <>
      <TitleWithBackArrowHeader>通知一覧</TitleWithBackArrowHeader>
      {isLoading ? (
        <ListCover>
          {visitorsData.notifications == null || visitorsData.notifications == '' ? (<div>通知はありません。</div>) : (<NotificationList visitorsData={visitorsData} currentUserName={currentUserName} />)}
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