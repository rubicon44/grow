import React from 'react';
import { Header } from '../../organisms/header';
import { Main } from '../main';
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
}