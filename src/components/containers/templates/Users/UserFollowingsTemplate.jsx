import React from 'react';
import { Main } from '../Main';
import { Header } from '../../organisms/Header';
import { FollowingsList } from '../../organisms/Users/FollowingsList';

export const UserFollowingsTemplate = () => {
  return (
    <>
      <Header />
      <Main>
        <FollowingsList />
      </Main>
    </>
  );
}