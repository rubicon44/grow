import PropTypes from "prop-types";
import { UserTasksButton } from "../../ui/UserTasksButton";

export const FollowingButton = ({ setChangeFollowButtonStyleToTrueFunc }) => (
  <UserTasksButton
    onMouseEnter={setChangeFollowButtonStyleToTrueFunc}
    color="black"
    isBold="true"
    size="small"
  >
    <span>フォロー中</span>
  </UserTasksButton>
);

FollowingButton.propTypes = {
  setChangeFollowButtonStyleToTrueFunc: PropTypes.func.isRequired,
};
