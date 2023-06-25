import styled from "styled-components";
import { AuthButtonGroupContainer } from "../AuthButtonGroupContainer";
import { SignInFormContainer } from "../SignInFormContainer";
import { TestUserInfo } from "../TestUserInfo";

export const SignInContent = () => (
  <SignInContentCover>
    <SignInFormContainer />
    <AuthButtonGroupContainer />
    <TestUserInfo />
  </SignInContentCover>
);

const SignInContentCover = styled.div`
  margin-top: 35px;
`;
