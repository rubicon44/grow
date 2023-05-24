import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaquery } from "../../../../../assets/styles/variable";
import { NotLoggedInHeader } from "./NotLoggedInHeader";
import { PcHeader } from "./PcHeader";
import { SpHeader } from "./SpHeader";

export const Header = ({
  clickedText,
  currentUserAuth,
  currentUserName,
  headerLinksForAuth,
  setClickedText,
  pcHeaderLinks,
  spHeaderLinks,
}) => (
  <>
    {!currentUserAuth && (
      <NotLoggedInHeader
        clickedText={clickedText}
        headerLinksForAuth={headerLinksForAuth}
        setClickedText={setClickedText}
      />
    )}

    <SpTopHeaderCover>
      <Link to={`/${currentUserName}`} onClick={() => setClickedText("")}>
        <HeaderTitle>{currentUserName}</HeaderTitle>
      </Link>
    </SpTopHeaderCover>

    <SpHeaderCover>
      <SpHeader
        clickedText={clickedText}
        setClickedText={setClickedText}
        spHeaderLinks={spHeaderLinks}
      />
    </SpHeaderCover>

    <PcHeaderCover>
      <PcHeader
        clickedText={clickedText}
        setClickedText={setClickedText}
        pcHeaderLinks={pcHeaderLinks}
      />
    </PcHeaderCover>
  </>
);

Header.defaultProps = {
  clickedText: null,
};

Header.propTypes = {
  clickedText: PropTypes.string,
  currentUserName: PropTypes.string.isRequired,
  headerLinksForAuth: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      clickedText: PropTypes.node.isRequired,
      text: PropTypes.node.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  setClickedText: PropTypes.func.isRequired,
  pcHeaderLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      clickedText: PropTypes.node.isRequired,
      text: PropTypes.node.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  spHeaderLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      clickedText: PropTypes.node.isRequired,
      text: PropTypes.node.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const HeaderTitle = styled.div`
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

const SpHeaderCover = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 52.5px;
  box-sizing: border-box;
  border-top: 1px solid #ddd;
  background-color: #fff;
  ${mediaquery.desk`
    display: none;
  `}
`;

const SpTopHeaderCover = styled.header`
  position: relative;
  display: flex;
  height: 50px;
  padding: 12px 15px;
  box-sizing: border-box;
  background-color: #eeeff1;
  ${mediaquery.desk`
    display: none;
  `}
`;

const PcHeaderCover = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 20%;
  height: 100vh;
  padding: 12px 15px;
  box-sizing: border-box;
  background-color: #eeeff1;
  z-index: 10;
  ${mediaquery.phone`
    display: none;
  `}
`;
