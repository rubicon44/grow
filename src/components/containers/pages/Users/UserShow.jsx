import { useShowPopup } from 'hooks/useShowPopup';
import { UserShowTemplate } from 'components/containers/templates/Users/UserShowTemplate';

export const UserShow = () => {
  const { showPopup } = useShowPopup();
  return <UserShowTemplate showPopup={showPopup} />;
};