import PropTypes from "prop-types";
import styled from "styled-components";
import GitHubMark from "../../../../../../assets/images/github-64.png";

export const GitHubAuthButton = ({ signinWithGitHub }) => (
  <GitHubButtonCover onClick={signinWithGitHub}>
    <GitHubMarkCover>
      <img src={GitHubMark} alt="GitHub" />
    </GitHubMarkCover>
    <Partition />
    <TextCover>
      <p>Sign in with GitHub</p>
    </TextCover>
  </GitHubButtonCover>
);

GitHubAuthButton.defaultProps = {
  signinWithGitHub: () => {},
};

GitHubAuthButton.propTypes = {
  signinWithGitHub: PropTypes.func,
};

const ButtonCover = styled.div`
  display: flex;
  width: 360px;
  height: 46px;
  margin: 0px 10px;
  font-family: Roboto, Noto Sans JP, sans-serif;
  font-family: Roboto Medium;
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
  border-radius: 5px;
  cursor: pointer;
`;

const GitHubButtonCover = styled(ButtonCover)`
  background-color: rgb(0, 0, 0);
`;

const MarkCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  margin: 0px 20px;
`;

const GitHubMarkCover = styled(MarkCover)`
  > img {
    width: 42px;
  }
`;

const Partition = styled.div`
  width: 1px;
  background: #fff;
`;

const TextCover = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
