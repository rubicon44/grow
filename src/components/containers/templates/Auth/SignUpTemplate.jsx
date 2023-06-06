import { MainWithHeaderForAuthContainer } from "../MainWithHeaderForAuthContainer";
import { SignUpFormContainer } from "../../organisms/auth/SignUpFormContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const SignUpTemplate = () => (
  <MainWithHeaderForAuthContainer>
    <TitleWithBackArrowHeader title="会員登録" />
    <SignUpFormContainer />
  </MainWithHeaderForAuthContainer>
);
