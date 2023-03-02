import { useSignOut } from '../../../../../hooks/useSignOut';
import { LogOutButton } from '../LogOutButton';

export const LogOutButtonContainer = ({ text }) => {
  const { handleSignout } = useSignOut();
  return <LogOutButton handleSignout={handleSignout} text={text} />;
};