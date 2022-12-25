import React from 'react';
import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { SignInForm } from 'components/containers/organisms/Auth/SignInForm';

export const SignInTemplate = () => {
  return (
    <MainWithHeader>
      <SignInForm />
    </MainWithHeader>
  );
}