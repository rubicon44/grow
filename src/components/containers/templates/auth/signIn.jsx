import React from 'react';
import { Main } from '../main';
import { Header } from '../../organisms/header';
import { SignInForm } from '../../organisms/auth/signInForm';

export const SignInTemplate = () => {
  return (
    <>
      <Header />
      <Main>
        <SignInForm />
      </Main>
    </>
  );
}