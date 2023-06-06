import PropTypes from "prop-types";
import styled from "styled-components";
import { FormInput } from "../../../../presentational/atoms/Input/FormInput";
import { FormSubmitButton } from "../../../../presentational/atoms/Button/FormSubmitButton";

export const SignInForm = ({ handleSubmit, isButtonDisabled }) => (
  <FormCover>
    {/* TODO: Formコンポーネント作成の検討。 */}
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
      <FormSubmitButton isButtonDisabled={isButtonDisabled}>
        ログイン
      </FormSubmitButton>
    </form>
  </FormCover>
);

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
};

const FormCover = styled.div`
  min-width: 260px;
  max-width: 360px;
  padding: 0 10px;
  text-align: left;
`;
