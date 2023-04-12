import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HeaderMenu } from './HeaderMenu';

export const Header = ({ drawerStatus, headerLinks, headerLinksForAuth, toggleDrawer }) => {
  return (
    <HeaderCover>
      <Logo to="/tasks">Grow</Logo>
      <HeaderMenuGroup>
        <HeaderMenu headerLinks={headerLinks} headerLinksForAuth={headerLinksForAuth} drawerStatus={drawerStatus} toggleDrawer={toggleDrawer} />
      </HeaderMenuGroup>
    </HeaderCover>
  );
};

Header.propTypes = {
  drawerStatus: PropTypes.shape({
    top: PropTypes.bool.isRequired,
    left: PropTypes.bool,
    bottom: PropTypes.bool,
    right: PropTypes.bool,
  }).isRequired,
  headerLinks: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  headerLinksForAuth: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

const HeaderCover = styled.div`
  display: flex;
  height: 50px;
  padding: 12px 15px;
  box-sizing: border-box;
`;

const Logo = styled(Link)`
  font-size: 22px;
  font-weight: bold;
  font-family: YuMincho;
  color: #ff444f;
  text-decoraiton: none;
`;

const HeaderMenuGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;