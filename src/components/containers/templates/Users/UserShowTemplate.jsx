import React from 'react';
import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { UserTasksList } from 'components/containers/organisms/Users/UserTasksList';

export const UserShowTemplate = () => {
  return (
    <MainWithHeader>
      <UserTasksList />
    </MainWithHeader>
  );
}