import React from 'react';
import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { FollowersList } from 'components/containers/organisms/Users/FollowersList';

export const UserFollowersTemplate = () => {
  return (
    <MainWithHeader>
      <FollowersList />
    </MainWithHeader>
  );
}