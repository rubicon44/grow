import { MainWithHeaderContainer } from "../MainWithHeaderContainer";
import { SignUpFormContainer } from "../../organisms/auth/SignUpFormContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const SignUpTemplate = () => (
  <MainWithHeaderContainer>
    <TitleWithBackArrowHeader title="会員登録" />
    <SignUpFormContainer />
  </MainWithHeaderContainer>
);
