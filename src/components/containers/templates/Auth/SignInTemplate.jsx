import { MainWithHeader } from "../MainWithHeader";
import { SignInFormContainer } from "../../organisms/auth/SignInFormContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const SignInTemplate = () => (
  <MainWithHeader>
    <TitleWithBackArrowHeader>ログイン</TitleWithBackArrowHeader>
    <SignInFormContainer />
  </MainWithHeader>
);
