import { MainWithHeaderForAuthContainer } from "../MainWithHeaderForAuthContainer";
import { SignUpContent } from "../../organisms/auth/SignUpContent";
import { TitleWithBackArrowHeaderWithNoMargin } from "../../../presentational/molecules/Header/TitleWithBackArrowHeaderWithNoMargin";

export const SignUpTemplate = () => (
  <MainWithHeaderForAuthContainer>
    <TitleWithBackArrowHeaderWithNoMargin title="会員登録" />
    <SignUpContent />
  </MainWithHeaderForAuthContainer>
);
