import { MainWithHeader } from "../MainWithHeader";
import { SignUpFormContainer } from "../../organisms/auth/SignUpFormContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const SignUpTemplate = () => (
  <MainWithHeader>
    <TitleWithBackArrowHeader title="会員登録" />
    <SignUpFormContainer />
  </MainWithHeader>
);
