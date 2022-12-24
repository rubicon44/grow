import React from 'react';
import { Main } from '../Main';
import { Header } from '../../organisms/Header';
import { UserTasksList } from '../../organisms/users/UserTasksList';

export const UserShowTemplate = () => {
  return (
    <>
      <Header />
      <Main>
        <UserTasksList />
      </Main>
    </>
  );
}