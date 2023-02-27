import { useContext } from 'react';
import { AuthContext } from 'auth/AuthProvider';
import { useCurrentUserName } from 'hooks/useCurrentUserName';
import { LogOutButtonSwitch } from 'components/containers/organisms/Users/UserTasksList/LogOutButtonSwitch';

export const LogOutButtonSwitchContainer = ({ userNameInUrl }) => {
  const { currentUserAuth } = useContext(AuthContext);
  const currentUserName = useCurrentUserName();
  return <LogOutButtonSwitch currentUserAuth={currentUserAuth} currentUserName={currentUserName} userNameInUrl={userNameInUrl} />;
};