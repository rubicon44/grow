import styled from "styled-components";
import { AuthButtonGroupContainer } from "../AuthButtonGroupContainer";
import { SignUpFormContainer } from "../SignUpFormContainer";

export const SignUpContent = () => (
  <SignUpContentCover>
    <SignUpFormContainer />
    <AuthButtonGroupContainer />
  </SignUpContentCover>
);

const SignUpContentCover = styled.div`
  margin-top: 35px;
`;
