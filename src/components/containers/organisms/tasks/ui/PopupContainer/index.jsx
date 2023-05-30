import PropTypes from "prop-types";
import { useShowPopup } from "../../../../../../hooks/useShowPopup";
import { Popup } from "../../../../../presentational/atoms/Popup";

export const PopupContainer = ({ message }) => {
  const { showPopup, visible } = useShowPopup();
  return <Popup message={message} showPopup={showPopup} visible={visible} />;
};

PopupContainer.propTypes = {
  message: PropTypes.string.isRequired,
};
