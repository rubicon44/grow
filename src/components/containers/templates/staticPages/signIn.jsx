import React from 'react';
import { Header } from '../../organisms/header';
import { Main } from '../main';
import { SignInForm } from '../../organisms/staticPages/signInForm';

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