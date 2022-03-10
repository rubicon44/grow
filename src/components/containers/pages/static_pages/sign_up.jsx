import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import { AuthContext } from '../../../../auth/authProvider';
import { Header } from '../../organisms/header';

const SignUp = ({ history }) => {
  const { signup } = useContext(AuthContext);
  const handleSubmit = event => {
    event.preventDefault();
    let { name, email, password } = event.target.elements;
    signup(name.value, email.value, password.value, history);
  };

  return (
    <div>
      <Header />
      <h1>ユーザー登録</h1>
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
    </div>
  );
};

export const SignUpWithRouter = withRouter(SignUp);