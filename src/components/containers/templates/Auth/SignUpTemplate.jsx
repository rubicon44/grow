import React from 'react';
import { Main } from '../Main';
import { Header } from '../../organisms/Header';
import { SignUpForm } from '../../organisms/Auth/SignUpForm';

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