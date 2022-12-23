import React from 'react';
import { Main } from '../main';
import { Header } from '../../organisms/header';
import { SignUpForm } from '../../organisms/auth/signUpForm';

export const SignUpTemplate = () => {
  return (
    <>
      <Header />
      <Main>
        <SignUpForm />
      </Main>
    </>
  );
}