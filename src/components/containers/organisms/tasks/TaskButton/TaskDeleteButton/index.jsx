import PropTypes from 'prop-types';

export const TaskDeleteButton = ({ deleteTaskFunc }) => {
  return <button type="button" onClick={deleteTaskFunc}>はい</button>;
};

TaskDeleteButton.propTypes = {
  deleteTaskFunc: PropTypes.func.isRequired,
};
