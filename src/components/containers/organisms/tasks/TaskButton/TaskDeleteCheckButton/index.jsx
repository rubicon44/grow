import PropTypes from "prop-types";

export const TaskDeleteCheckButton = ({
  currentUserId,
  deleteCheckFunc,
  taskCreatedUserId,
}) =>
  String(taskCreatedUserId) === String(currentUserId) ? (
    <button type="button" onClick={deleteCheckFunc}>
      削除
    </button>
  ) : null;

TaskDeleteCheckButton.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  deleteCheckFunc: PropTypes.func.isRequired,
  taskCreatedUserId: PropTypes.string.isRequired,
};
