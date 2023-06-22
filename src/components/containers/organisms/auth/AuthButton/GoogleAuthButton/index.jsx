import PropTypes from "prop-types";
import styled from "styled-components";
import GoogleMark from "../../../../../../assets/images/icons8-google-32.png";

export const GoogleAuthButton = ({ signinWithGoogle }) => (
  <GoogleButtonCover onClick={signinWithGoogle}>
    <MarkCover>
      <img src={GoogleMark} alt="Google" />
    </MarkCover>
    <TextCover>
      <p>Sign in with Google</p>
    </TextCover>
  </GoogleButtonCover>
);

GoogleAuthButton.defaultProps = {
  signinWithGoogle: () => {},
};

GoogleAuthButton.propTypes = {
  signinWithGoogle: PropTypes.func,
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

const GoogleButtonCover = styled(ButtonCover)`
  background: #fff;
  border: 1px solid #ddd;
  color: #000;
`;

const MarkCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  margin: 0px 20px;
`;

const TextCover = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
