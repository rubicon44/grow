import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../../../auth/authProvider';
import { BackButton } from '../../../presentational/atoms/Button/backButton';
import { Title } from '../../../presentational/atoms/Title/title';

export function SignUpForm() {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);
  const [load, setLoad] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    const { nickname, username, email, password } = e.target.elements;
    signup(nickname.value, username.value, email.value, password.value);
    setLoad(false);
    navigate('/tasks');
  };

  return (
    <>
      <ListHeader>
        <BackButton />
        <Title title="会員登録" />
      </ListHeader>
      <FormCover>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nickname">
            ニックネーム
            <input name="nickname" type="text" placeholder="NickName" />
          </label>
          <label htmlFor="username">
            ユーザーネーム
            <input name="username" type="text" placeholder="UserName" />
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

const ListHeader = styled.div`
  display: flex;
  width: 100%;

  > h2 {
    width: 100%;
    margin-right: 45px;
  }
`;

const FormCover = styled.div`
  min-width: 260px;
  padding: 0 10px;
  text-align: left;
`;