import React from 'react';
import { Main } from '../Main';
import { Header } from '../../organisms/Header';
import { SignUpForm } from '../../organisms/auth/SignUpForm';

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