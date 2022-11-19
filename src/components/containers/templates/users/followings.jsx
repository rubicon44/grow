import React from 'react';
import { Header } from '../../organisms/header';
import { Main } from '../main';
import { FollowingsList } from '../../organisms/users/followingsList';

export function UserFollowingsTemplate() {
  return (
    <>
      <Header />
      <Main>
        <FollowingsList />
      </Main>
    </>
  );
}