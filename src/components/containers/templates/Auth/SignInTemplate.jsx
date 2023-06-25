import { MainWithHeaderForAuthContainer } from "../MainWithHeaderForAuthContainer";
import { SignInContent } from "../../organisms/auth/SignInContent";
import { TitleWithBackArrowHeaderWithNoMargin } from "../../../presentational/molecules/Header/TitleWithBackArrowHeaderWithNoMargin";

export const SignInTemplate = () => (
  <MainWithHeaderForAuthContainer>
    <TitleWithBackArrowHeaderWithNoMargin title="ログイン" />
    <SignInContent />
  </MainWithHeaderForAuthContainer>
);
