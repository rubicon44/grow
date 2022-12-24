import React from 'react';
import { Main } from '../Main';
import { Header } from '../../organisms/Header';
import { SignInForm } from '../../organisms/Auth/SignInForm';

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