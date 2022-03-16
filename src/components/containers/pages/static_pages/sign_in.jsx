import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../auth/authProvider';
import { Header } from '../../organisms/header';

export const SignIn = () => {
  const navigate = useNavigate();
  const { signin } = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signin(email.value, password.value);
    navigate("/tasks");
  };

  return (
    <div>
      <Header />
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <label>
          メール
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          パスワード
          <input name="password" type="password" placeholder="Password" autoComplete="on" />
        </label>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};