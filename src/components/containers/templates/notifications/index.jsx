import React from 'react';
import { Main } from '../main';
import { Header } from '../../organisms/header';
import { NotificationsList } from '../../organisms/notifications/notificationsList';

export const NotificationsTemplate = () => {
  return (
    <>
      <Header />
      <Main>
        <NotificationsList />
      </Main>
    </>
  );
};