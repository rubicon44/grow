import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderMenu } from 'components/containers/organisms/common/Header/HeaderMenu';

export const Header = ({ headerLinks, headerLinksForAuth, state, toggleDrawer }) => {
  return (
    <HeaderCover>
      <Logo to="/tasks">Grow</Logo>
      <HeaderMenuGroup>
        <HeaderMenu headerLinks={headerLinks} headerLinksForAuth={headerLinksForAuth} state={state} toggleDrawer={toggleDrawer} />
      </HeaderMenuGroup>
    </HeaderCover>
  );
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