import PropTypes from "prop-types";
import styled from "styled-components";
import { FormInput } from "../../../../presentational/atoms/Input/FormInput";
import { FormSubmitButton } from "../../../../presentational/atoms/Button/FormSubmitButton";

export const SignUpForm = ({ handleSubmit, isButtonDisabled }) => (
  <FormCover>
    {/* TODO: Formコンポーネント作成の検討。 */}
    <form onSubmit={handleSubmit}>
      <FormInputWrapper>
        <FormInput
          htmlFor="nickname"
          type="text"
          name="nickname"
          placeholder="NickName"
          autoComplete="on"
        >
          ニックネーム
        </FormInput>
      </FormInputWrapper>
      <FormInputWrapper>
        <FormInput
          htmlFor="username"
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="on"
        >
          ユーザーネーム
        </FormInput>
      </FormInputWrapper>
      <FormInputWrapper>
        <FormInput
          htmlFor="email"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="on"
        >
          メール
        </FormInput>
      </FormInputWrapper>
      <FormInputWrapper>
        <FormInput
          htmlFor="password"
          type="password"
          name="password"
          placeholder="Password"
        >
          パスワード
        </FormInput>
      </FormInputWrapper>
      <FormSubmitButtonWrapper>
        <FormSubmitButton isButtonDisabled={isButtonDisabled}>
          会員登録
        </FormSubmitButton>
      </FormSubmitButtonWrapper>
    </form>
  </FormCover>
);

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
};

const FormCover = styled.div`
  min-width: 260px;
  max-width: 360px;
  text-align: left;
`;

const FormInputWrapper = styled.div`
  margin-top: 10px;
`;

const FormSubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;
