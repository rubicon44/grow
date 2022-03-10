import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import { AuthContext } from '../../../../auth/authProvider';
import { Header } from '../../organisms/header';

const SignIn = ({ history }) => {
  const { signin } = useContext(AuthContext);
  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signin(email.value, password.value, history);
    history.push("/tasks");
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

export const SignInWithRouter = withRouter(SignIn);