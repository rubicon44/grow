import React from 'react';
import { Main } from '../main';
import { Header } from '../../organisms/header';
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