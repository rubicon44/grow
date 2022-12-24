import React from 'react';
import { Main } from '../Main';
import { Header } from '../../organisms/Header';
import { SignInForm } from '../../organisms/auth/SignInForm';

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