import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../../../../../auth/AuthProvider";
import { useCurrentUserName } from "../../../../../../hooks/useCurrentUserName";
import { LogOutButtonSwitch } from "../LogOutButtonSwitch";

export const LogOutButtonSwitchContainer = ({ userNameInUrl }) => {
  const { currentUserAuth } = useContext(AuthContext);
  const currentUserName = useCurrentUserName();
  return (
    <LogOutButtonSwitch
      currentUserAuth={currentUserAuth}
      currentUserName={currentUserName}
      userNameInUrl={userNameInUrl}
    />
  );
};

LogOutButtonSwitchContainer.propTypes = {
  userNameInUrl: PropTypes.string.isRequired,
};
