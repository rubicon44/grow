import React, { useContext } from 'react';
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

export const SignUp = () => {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);
  const handleSubmit = event => {
    event.preventDefault();
    let { name, email, password } = event.target.elements;
    signup(name.value, email.value, password.value);
    navigate("/tasks");
  };

  return (
    <React.Fragment>
      <Header />
      <Title>会員登録</Title>
      <FormCover>
        <form onSubmit={handleSubmit}>
          <label>
            名前
            <input name="name" type="text" placeholder="Name" />
          </label>
          <label>
            メール
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            パスワード
            <input name="password" type="password" placeholder="Password" autoComplete="on" />
          </label>
          <button type="submit">登録</button>
        </form>
      </FormCover>
    </React.Fragment>
  );
};