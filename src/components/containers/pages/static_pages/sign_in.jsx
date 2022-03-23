import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../../../auth/authProvider';
import { Header } from '../../organisms/header';

const Title = styled.h2`
  width: 288px;
  font-size: 36px;
  font-family: YuMincho;
`

const FormCover = styled.div`
  min-width: 260px;
  padding: 0 10px;
  text-align: left;
`

export const SignIn = () => {
  const navigate = useNavigate();
  const { signin } = useContext(AuthContext);
  const [load, setLoad] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setLoad(true);
    const { email, password } = e.target.elements;
    signin(email.value, password.value);
    setLoad(false)
    navigate("/tasks");
  };

  return (
    <React.Fragment>
      <Header />
      <Title>ログイン</Title>
      <FormCover>
        <form onSubmit={handleSubmit}>
          <label>
            メール
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            パスワード
            <input name="password" type="password" placeholder="Password" autoComplete="on" />
          </label>
          <button type="submit" disabled={load}>ログイン</button>
        </form>
      </FormCover>
    </React.Fragment>
  );
};