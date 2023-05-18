import PropTypes from "prop-types";
import styled from "styled-components";
import { FormInput } from "../../../../presentational/atoms/Input/FormInput";
import { FormSubmitButton } from "../../../../presentational/atoms/Button/FormSubmitButton";
import { TitleWithBackArrowHeader } from "../../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const SignUpForm = ({ handleSubmit, isButtonDisabled }) => (
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
        <FormSubmitButton isButtonDisabled={isButtonDisabled}>
          会員登録
        </FormSubmitButton>
      </form>
    </FormCover>
  </>
);

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
};

const FormCover = styled.div`
  min-width: 260px;
  padding: 0 10px;
  text-align: left;
`;
