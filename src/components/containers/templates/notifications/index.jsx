import React from 'react';
import { Main } from '../Main';
import { Header } from '../../organisms/Header';
import { NotificationsList } from '../../organisms/notifications/NotificationsList';

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