import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

export const SpHeader = ({ currentUserName, setClickedText }) => (
  <Header>
    <Link to={`/${currentUserName}`} onClick={() => setClickedText("")}>
      <HeaderTitle>{currentUserName}</HeaderTitle>
    </Link>
  </Header>
);

SpHeader.propTypes = {
  currentUserName: PropTypes.string.isRequired,
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
