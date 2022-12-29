import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from 'auth/AuthProvider';
import { FormInput } from 'components/presentational/atoms/Input/FormInput';
import { FormSubmitButton } from 'components/presentational/atoms/Button/FormSubmitButton';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const SignUpForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signup } = useContext(AuthContext);
  const [load, setLoad] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    const { nickname, username, email, password } = e.target.elements;
    await signup(nickname.value, username.value, email.value, password.value);
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
      <TitleWithBackArrowHeader>会員登録</TitleWithBackArrowHeader>
      <FormCover>
        <form onSubmit={handleSubmit}>
          <FormInput
            htmlFor="nickname"
            type="text"
            name="nickname"
            placeholder="NickName"
            autoComplete="on"
          >
            ニックネーム
          </FormInput>
          <FormInput
            htmlFor="username"
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="on"
          >
            ユーザーネーム
          </FormInput>
          <FormInput
            htmlFor="email"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="on"
          >
            メール
          </FormInput>
          <FormInput
            htmlFor="password"
            type="password"
            name="password"
            placeholder="Password"
          >
            パスワード
          </FormInput>
          <FormSubmitButton load={load}>会員登録</FormSubmitButton>
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