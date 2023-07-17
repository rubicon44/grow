import PropTypes from "prop-types";
import { ConfirmationPopup } from "../../../../../presentational/atoms/Popup/ConfirmationPopup";

export const UserTasksCheckReLoginWhenChangedUserId = ({
  changeUserNameCheckAble,
  changeUserNameFunc,
  revertUserBioFunc,
}) =>
  changeUserNameCheckAble && (
    <ConfirmationPopup
      message="ユーザーIDの変更には際ログインが必要です。変更しますか？"
      onConfirm={changeUserNameFunc}
      onCancel={revertUserBioFunc}
    />
  );

UserTasksCheckReLoginWhenChangedUserId.propTypes = {
  changeUserNameCheckAble: PropTypes.bool.isRequired,
  changeUserNameFunc: PropTypes.func.isRequired,
  revertUserBioFunc: PropTypes.func.isRequired,
};
