import React, { useState, useEffect } from 'react';
import { getCurrentUser, getNotifications } from '../../../../infra/api';
import { UserNotificationsTemplate } from '../../templates/users/notifications';

export function UserNotifications() {
  // todo: 現在のユーザーのみNotificationsを取得する際に必要？
  const [currentUserId, setCurrentUserId] = useState();
  const [currentUserName, setCurrentUserName] = useState();
  useEffect(() => {
    let isMounted = true;
    getCurrentUser()
      .then((response) => {
        const currentUser = response.data.user;
        const currentUserId = String(currentUser.id);
        const currentUserName = String(currentUser.username);
        if (isMounted) setCurrentUserId(currentUserId);
        if (isMounted) setCurrentUserName(currentUserName);
      })
      .catch();
    // .catch((data) => {
    // });
    return () => {
      isMounted = false;
    };
  }, [currentUserId]);

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

  return <UserNotificationsTemplate currentUserName={currentUserName} notifications={notifications} visitors={visitors} likeVisitors={likeVisitors} />;
}