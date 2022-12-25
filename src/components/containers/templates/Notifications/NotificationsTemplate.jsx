import React from 'react';
import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { NotificationsList } from 'components/containers/organisms/Notifications/NotificationsList';

export const NotificationsTemplate = () => {
  return (
    <MainWithHeader>
      <NotificationsList />
    </MainWithHeader>
  );
};