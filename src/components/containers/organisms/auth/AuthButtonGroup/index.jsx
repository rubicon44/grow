import PropTypes from "prop-types";
import styled from "styled-components";
import { GitHubAuthButton } from "../AuthButton/GitHubAuthButton";
import { GoogleAuthButton } from "../AuthButton/GoogleAuthButton";

export const AuthButtonGroup = ({ signinWithGitHub, signinWithGoogle }) => (
  <ButtonGroup>
    <GoogleAuthButton signinWithGoogle={signinWithGoogle} />
    <GitHubAuthButton signinWithGitHub={signinWithGitHub} />
  </ButtonGroup>
);

AuthButtonGroup.defaultProps = {
  signinWithGitHub: () => {},
  signinWithGoogle: () => {},
};

AuthButtonGroup.propTypes = {
  signinWithGitHub: PropTypes.func,
  signinWithGoogle: PropTypes.func,
};

const ButtonGroup = styled.div`
  margin-top: 20px;
  > div:not(:first-of-type) {
    margin-top: 20px;
  }
`;
