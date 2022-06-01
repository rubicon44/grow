import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../../../auth/authProvider';
import { Header } from '../../organisms/header';

const Title = styled.h2`
  width: 288px;
  font-size: 36px;
  font-family: YuMincho;
`;

const FormCover = styled.div`
  min-width: 260px;
  padding: 0 10px;
  text-align: left;
`;

export function SignUp() {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);
  const [load, setLoad] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    const { nickname, user_name, email, password } = e.target.elements;
    signup(nickname.value, user_name.value, email.value, password.value);
    setLoad(false);
    navigate('/tasks');
  };

  return (
    <>
      <Header />
      <Title>会員登録</Title>
      <FormCover>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nickname">
            ニックネーム
            <input name="nickname" type="text" placeholder="NickName" />
          </label>
          <label htmlFor="user_name">
            ユーザーネーム
            <input name="user_name" type="text" placeholder="UserName" />
          </label>
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
            会員登録
          </button>
        </form>
      </FormCover>
    </>
  );
}
