import PropTypes from "prop-types";
import { useCurrentUserName } from "../../../../../../hooks/useCurrentUserName";
import { LogOutButtonSwitch } from "../LogOutButtonSwitch";

export const LogOutButtonSwitchContainer = ({ userNameInUrl }) => {
  const currentUserName = useCurrentUserName();
  return (
    <LogOutButtonSwitch
      currentUserName={currentUserName}
      userNameInUrl={userNameInUrl}
    />
  );
};

LogOutButtonSwitchContainer.propTypes = {
  userNameInUrl: PropTypes.string.isRequired,
};
