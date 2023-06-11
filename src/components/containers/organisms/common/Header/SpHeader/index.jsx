import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export const SpHeader = ({
  currentUserName,
  handleShowLogoutConfirmation,
  setClickedText,
}) => (
  <Header>
    <Link to={`/${currentUserName}`} onClick={() => setClickedText("")}>
      <HeaderTitle>{currentUserName}</HeaderTitle>
    </Link>
    <LogOutButtonCover>
      <LogoutOutlinedIcon onClick={handleShowLogoutConfirmation} />
    </LogOutButtonCover>
  </Header>
);

SpHeader.defaultProps = {
  currentUserName: "",
  handleShowLogoutConfirmation: () => {},
};

SpHeader.propTypes = {
  currentUserName: PropTypes.string,
  handleShowLogoutConfirmation: PropTypes.func,
  setClickedText: PropTypes.func.isRequired,
};

const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 30;
  width: 100%;
  display: flex;
  height: 50px;
  padding: 12px 15px;
  box-sizing: border-box;
  background-color: #eeeff1;
`;

const HeaderTitle = styled.h1`
  position: absolute;
  top: 5px;
  left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 35px;
  font-size: 12px;
  color: rgb(255, 255, 255);
  background: rgb(237, 128, 119);
`;

const LogOutButtonCover = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;
