import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../../../auth/authProvider';
import { TitleWithBackArrowHeader } from '../../../presentational/molecules/Header/titleWithBackArrowHeader';

export function SignInForm() {
  const navigate = useNavigate();
  const { signin } = useContext(AuthContext);
  const [load, setLoad] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    const { email, password } = e.target.elements;
    signin(email.value, password.value);
    setLoad(false);
    navigate('/tasks');
  };

  return (
    <>
      <TitleWithBackArrowHeader>ログイン</TitleWithBackArrowHeader>
      <FormCover>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            メール
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label htmlFor="password">
            パスワード
            <input
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="on"
            />
          </label>
          <button type="submit" disabled={load}>
            ログイン
          </button>
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