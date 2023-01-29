import { useSignOut } from 'hooks/useSignOut';
import { LogOutButton } from 'components/containers/organisms/Common/LogOutButton';

export const LogOutButtonContainer = ({ text }) => {
  const { signoutFunc } = useSignOut();
  return <LogOutButton signoutFunc={signoutFunc} text={text} />;
};