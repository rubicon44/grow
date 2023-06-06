import { MainWithHeaderForAuthContainer } from "../MainWithHeaderForAuthContainer";
import { SignInFormContainer } from "../../organisms/auth/SignInFormContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const SignInTemplate = () => (
  <MainWithHeaderForAuthContainer>
    <TitleWithBackArrowHeader title="ログイン" />
    <SignInFormContainer />
  </MainWithHeaderForAuthContainer>
);
