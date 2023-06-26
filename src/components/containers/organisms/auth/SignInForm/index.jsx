import PropTypes from "prop-types";
import styled from "styled-components";
import { FormInput } from "../../../../presentational/atoms/Input/FormInput";
import { FormSubmitButton } from "../../../../presentational/atoms/Button/FormSubmitButton";

export const SignInForm = ({ handleSubmit, isButtonDisabled }) => (
  <Form onSubmit={handleSubmit}>
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
        ログイン
      </FormSubmitButton>
    </FormSubmitButtonWrapper>
  </Form>
);

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
};

const Form = styled.form`
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
