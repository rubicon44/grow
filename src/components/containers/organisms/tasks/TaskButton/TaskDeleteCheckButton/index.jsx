import PropTypes from 'prop-types';

export const TaskDeleteCheckButton = ({ currentUserId, deleteCheckFunc, taskCreatedUserId }) => {
  return String(taskCreatedUserId) === String(currentUserId) ? <button type="button" onClick={deleteCheckFunc}>削除</button> : null;
};

TaskDeleteCheckButton.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  deleteTaskFunc: PropTypes.func,
  taskCreatedUserId: PropTypes.string.isRequired,
};