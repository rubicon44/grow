import PropTypes from "prop-types";
import { LogOutConfirmation } from "../LogOutConfirmation";

export const LogOutConfirmationContainer = ({
  handleLogout,
  revertLogOutConfirmation,
}) => (
  <LogOutConfirmation
    handleLogout={handleLogout}
    revertLogOutConfirmation={revertLogOutConfirmation}
  />
);

LogOutConfirmationContainer.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  revertLogOutConfirmation: PropTypes.func.isRequired,
};
