import { MainWithHeaderContainer } from "../MainWithHeaderContainer";
import { SignInFormContainer } from "../../organisms/auth/SignInFormContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const SignInTemplate = () => (
  <MainWithHeaderContainer>
    <TitleWithBackArrowHeader title="ログイン" />
    <SignInFormContainer />
  </MainWithHeaderContainer>
);
