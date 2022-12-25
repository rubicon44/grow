import React from 'react';
import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { FollowingsList } from 'components/containers/organisms/Users/FollowingsList';

export const UserFollowingsTemplate = () => {
  return (
    <MainWithHeader>
      <FollowingsList />
    </MainWithHeader>
  );
}