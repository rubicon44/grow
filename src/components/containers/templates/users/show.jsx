import React from 'react';
import { Main } from '../main';
import { Header } from '../../organisms/header';
import { UserTasksList } from '../../organisms/users/userTasksList';

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