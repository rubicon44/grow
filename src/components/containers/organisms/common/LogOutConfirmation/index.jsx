import PropTypes from "prop-types";
import { ConfirmationPopup } from "../../../../presentational/atoms/Popup/ConfirmationPopup";

export const LogOutConfirmation = ({
  handleLogout,
  revertLogOutConfirmation,
  showLogoutConfirmation,
}) =>
  showLogoutConfirmation && (
    <ConfirmationPopup
      message="本当にログアウトしますか？"
      onConfirm={handleLogout}
      onCancel={revertLogOutConfirmation}
    />
  );

LogOutConfirmation.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  revertLogOutConfirmation: PropTypes.func.isRequired,
  showLogoutConfirmation: PropTypes.bool.isRequired,
};
