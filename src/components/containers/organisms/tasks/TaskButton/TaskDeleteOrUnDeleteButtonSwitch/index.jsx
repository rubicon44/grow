import PropTypes from "prop-types";
import { ConfirmationPopup } from "../../../../../presentational/atoms/Popup/ConfirmationPopup";

export const TaskDeleteOrUnDeleteButtonSwitch = ({
  deleteCheckAble,
  deleteTaskFunc,
  unDeleteCheckFunc,
}) =>
  deleteCheckAble && (
    <ConfirmationPopup
      message="本当に削除しますか？"
      onConfirm={deleteTaskFunc}
      onCancel={unDeleteCheckFunc}
    />
  );

TaskDeleteOrUnDeleteButtonSwitch.propTypes = {
  deleteCheckAble: PropTypes.bool.isRequired,
  deleteTaskFunc: PropTypes.func.isRequired,
  unDeleteCheckFunc: PropTypes.func.isRequired,
};
