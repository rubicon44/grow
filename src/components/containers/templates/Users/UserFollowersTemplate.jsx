import React from 'react';
import { Main } from '../Main';
import { Header } from '../../organisms/Header';
import { FollowersList } from '../../organisms/Users/FollowersList';

export const UserFollowersTemplate = () => {
  return (
    <>
      <Header />
      <Main>
        <FollowersList />
      </Main>
    </>
  );
}