import React from 'react';
import { Header } from '../../organisms/header';
import { Main } from '../main';
import { SignUpForm } from '../../organisms/staticPages/signUpForm';

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