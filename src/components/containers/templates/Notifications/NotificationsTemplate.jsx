import React from 'react';
import { Main } from '../Main';
import { Header } from '../../organisms/Header';
import { NotificationsList } from '../../organisms/Notifications/NotificationsList';

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