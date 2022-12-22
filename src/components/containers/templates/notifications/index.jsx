import React from 'react';
import { Header } from '../../organisms/header';
import { Main } from '../main';
import { NotificationsLists } from '../../organisms/notifications/notificationsLists';

export const NotificationsTemplate = () => {
  return (
    <>
      <Header />
      <Main>
        <NotificationsLists />
      </Main>
    </>
  );
}