import React from 'react';
import { Header } from '../../organisms/header';
import { Main } from '../main';
import { UserTasksList } from '../../organisms/users/userTasksList';

export function UserShowTemplate() {
  return (
    <>
      <Header />
      <Main>
        <UserTasksList />
      </Main>
    </>
  );
}