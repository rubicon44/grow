import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from 'auth/AuthProvider';
import { FormInput } from 'components/presentational/atoms/Input/FormInput';
import { FormSubmitButton } from 'components/presentational/atoms/Button/FormSubmitButton';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const SignInForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useContext(AuthContext);
  const [load, setLoad] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    const { email, password } = e.target.elements;
    await signin(email.value, password.value);
    setLoad(false);
    const locationPathName = location.pathname.split('/');
    const tasksText = locationPathName[locationPathName.length - 1];
    if(tasksText === "tasks") {
      window.location.reload();
    } else {
      await navigate('/tasks');
    }
  };

  return (
    <>
      <TitleWithBackArrowHeader>ログイン</TitleWithBackArrowHeader>
      <FormCover>
        <form onSubmit={handleSubmit}>
          <FormInput
            htmlFor="email"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="on"
          >
            メール
          </FormInput>
          <FormInput
            htmlFor="password"
            type="password"
            name="password"
            placeholder="Password"
          >
            パスワード
          </FormInput>
          <FormSubmitButton load={load}>ログイン</FormSubmitButton>
        </form>
      </FormCover>
    </>
  );
}

const FormCover = styled.div`
  min-width: 260px;
  padding: 0 10px;
  text-align: left;
`;