import PropTypes from "prop-types";
import { useCurrentUserName } from "../../../../../../hooks/useCurrentUserName";
import { LogOutButtonSwitch } from "../LogOutButtonSwitch";

export const LogOutButtonSwitchContainer = ({ currentPath }) => {
  const currentUserName = useCurrentUserName();
  return (
    <LogOutButtonSwitch
      currentUserName={currentUserName}
      currentPath={currentPath}
    />
  );
};

LogOutButtonSwitchContainer.propTypes = {
  currentPath: PropTypes.string.isRequired,
};
