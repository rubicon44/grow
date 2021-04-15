import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import { AuthContext } from '../../../../auth/authProvider';
import { Header } from '../../organisms/header';

const SignUp = ({ history }) => {
  const { signup } = useContext(AuthContext);
  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signup(email.value, password.value, history);
  };

  return (
    <div>
      <Header />
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <label>
          メール
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          パスワード
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">登録</button>
      </form>
    </div>
  );
};

export const SignUpWithRouter = withRouter(SignUp);