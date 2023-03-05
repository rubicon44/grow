import styled from 'styled-components';
import { FormInput } from '../../../../presentational/atoms/input/formInput';
import { FormSubmitButton } from '../../../../presentational/atoms/button/formSubmitButton';
import { TitleWithBackArrowHeader } from '../../../../presentational/molecules/header/titleWithBackArrowHeader';

export const SignInForm = ({ handleSubmit, isButtonDisabled }) => {
  return (
    <>
      <TitleWithBackArrowHeader>ログイン</TitleWithBackArrowHeader>
      <FormCover>
        <form onSubmit={handleSubmit}>
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
          <FormSubmitButton isButtonDisabled={isButtonDisabled}>ログイン</FormSubmitButton>
        </form>
      </FormCover>
    </>
  );
};

const FormCover = styled.div`
  min-width: 260px;
  padding: 0 10px;
  text-align: left;
`;