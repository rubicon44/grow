
import { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from 'auth/AuthProvider';
import { currentUser } from 'infra/currentUser';
import { LogOutButtonContainer } from 'components/containers/organisms/common/LogOutButton/LogOutButtonContainer';

export const LogOutButtonSwitch = ({ userNameInUrl }) => {
  const { currentUserAuth } = useContext(AuthContext);

  const currentUserName = () => {
    if(localStorage.getItem('user')) {
      const username = currentUser().username;
      return username;
    }
    return null;
  };

  return (
    String(currentUserName()) === String(userNameInUrl) && (
      <LogOutButtonCover>
        {currentUserAuth && <LogOutButtonContainer text="ログアウト" />}
      </LogOutButtonCover>
    )
  );
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