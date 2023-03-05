import styled from 'styled-components';
import { LogOutButtonContainer } from '../../../common/logOutButtonContainer';

export const LogOutButtonSwitch = ({ currentUserAuth, currentUserName, userNameInUrl }) => {
  return (
    String(currentUserName) === String(userNameInUrl) && (
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