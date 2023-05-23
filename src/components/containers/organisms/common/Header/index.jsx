import PropTypes from "prop-types";
import styled from "styled-components";
import { HeaderMenu } from "./HeaderMenu";

export const Header = ({
  currentUserAuth,
  drawerStatus,
  headerLinks,
  headerLinksForAuth,
  title,
  toggleDrawer,
}) => (
  <HeaderCover>
    <Title>{title}</Title>
    <HeaderMenuGroup>
      <HeaderMenu
        currentUserAuth={currentUserAuth}
        headerLinks={headerLinks}
        headerLinksForAuth={headerLinksForAuth}
        drawerStatus={drawerStatus}
        toggleDrawer={toggleDrawer}
      />
    </HeaderMenuGroup>
  </HeaderCover>
);

Header.propTypes = {
  drawerStatus: PropTypes.shape({
    top: PropTypes.bool.isRequired,
    left: PropTypes.bool,
    bottom: PropTypes.bool,
    right: PropTypes.bool,
  }).isRequired,
  headerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  headerLinksForAuth: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

const HeaderCover = styled.header`
  position: relative;
  display: flex;
  height: 50px;
  padding: 12px 15px;
  box-sizing: border-box;
  background-color: #eeeff1;
`;

const HeaderMenuGroup = styled.div`
  position: absolute;
  top: 50%;
  right: 1%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: bold;
`;
