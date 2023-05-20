import { MainWithHeader } from "../MainWithHeader";
import { SignUpFormContainer } from "../../organisms/auth/SignUpFormContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const SignUpTemplate = () => (
  <MainWithHeader>
    <TitleWithBackArrowHeader>会員登録</TitleWithBackArrowHeader>
    <SignUpFormContainer />
  </MainWithHeader>
);
