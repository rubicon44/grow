import React from 'react';
import { Main } from '../main';
import { Header } from '../../organisms/header';
import { FollowingsList } from '../../organisms/users/followingsList';

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