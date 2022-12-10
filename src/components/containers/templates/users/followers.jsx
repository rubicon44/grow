import React from 'react';
import { Header } from '../../organisms/header';
import { Main } from '../main';
import { FollowersList } from '../../organisms/users/followersList';

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