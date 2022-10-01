import React from 'react';
import { Header } from '../../organisms/header';
import { Main } from '../main';
import { NotificationsList } from '../../organisms/users/notificationsList';

export function UserNotificationsTemplate() {
  return (
    <>
      <Header />
      <Main>
        <NotificationsList />
      </Main>
    </>
  );
}