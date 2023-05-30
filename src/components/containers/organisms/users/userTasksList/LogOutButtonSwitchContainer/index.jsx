import PropTypes from "prop-types";
import { useCurrentUserName } from "../../../../../../hooks/useCurrentUserName";
import { LogOutButtonSwitch } from "../LogOutButtonSwitch";

export const LogOutButtonSwitchContainer = ({ currentPathSegment }) => {
  const currentUserName = useCurrentUserName();
  return (
    <LogOutButtonSwitch
      currentUserName={currentUserName}
      currentPathSegment={currentPathSegment}
    />
  );
};

LogOutButtonSwitchContainer.defaultProps = {
  currentPathSegment: null,
};

LogOutButtonSwitchContainer.propTypes = {
  currentPathSegment: PropTypes.string,
};
