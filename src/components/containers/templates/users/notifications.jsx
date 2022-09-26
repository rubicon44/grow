import React from 'react';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
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

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  text-align: center;
  background-color: #f8f7f3;
`;