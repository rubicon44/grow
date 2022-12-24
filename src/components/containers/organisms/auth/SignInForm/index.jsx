import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../../../../auth/AuthProvider';
import { TitleWithBackArrowHeader } from '../../../../presentational/molecules/Header/TitleWithBackArrowHeader';

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
          <label htmlFor="email">メール
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label htmlFor="password">パスワード
            <input name="password" type="password" placeholder="Password" autoComplete="on" />
          </label>
          <button type="submit" disabled={load}>ログイン</button>
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