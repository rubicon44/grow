import PropTypes from "prop-types";
import styled from "styled-components";
import { LogOutButtonContainer } from "../../../common/LogOutButtonContainer";

export const LogOutButtonSwitch = ({
  currentUserAuth,
  currentUserName,
  userNameInUrl,
}) => (
  String(currentUserName) === String(userNameInUrl) && (
    <LogOutButtonCover>
      {currentUserAuth && <LogOutButtonContainer text="ログアウト" />}
    </LogOutButtonCover>
  )
);

LogOutButtonSwitch.propTypes = {
  currentUserAuth: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
  currentUserName: PropTypes.string.isRequired,
  userNameInUrl: PropTypes.string.isRequired,
};

const LogOutButtonCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-top: 1px solid #000;
  box-sizing: border-box;
`;
