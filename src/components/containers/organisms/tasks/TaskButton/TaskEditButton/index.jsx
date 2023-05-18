import PropTypes from "prop-types";

export const TaskEditButton = ({
  currentUserId,
  isButtonDisabled,
  moveToEditTask,
  taskCreatedUserId,
}) =>
  String(taskCreatedUserId) === String(currentUserId) ? (
    <button type="button" disabled={isButtonDisabled} onClick={moveToEditTask}>
      編集
    </button>
  ) : null;

TaskEditButton.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  moveToEditTask: PropTypes.func.isRequired,
  taskCreatedUserId: PropTypes.string.isRequired,
};
