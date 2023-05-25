import PropTypes from "prop-types";
import styled from "styled-components";
import { LogOutButtonContainer } from "../../../common/LogOutButtonContainer";

export const LogOutButtonSwitch = ({ currentUserName, currentPathSegment }) =>
  String(currentUserName) === String(currentPathSegment) && (
    <LogOutButtonCover>
      <LogOutButtonContainer text="ログアウト" />
    </LogOutButtonCover>
  );

LogOutButtonSwitch.defaultProps = {
  currentPathSegment: null,
};

LogOutButtonSwitch.propTypes = {
  currentUserName: PropTypes.string.isRequired,
  currentPathSegment: PropTypes.string,
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
