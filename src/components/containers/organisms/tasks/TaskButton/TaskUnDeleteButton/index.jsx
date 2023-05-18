import PropTypes from "prop-types";

export const TaskUnDeleteButton = ({ unDeleteCheckFunc }) => {
  return (
    <button type="button" onClick={unDeleteCheckFunc}>
      いいえ
    </button>
  );
};

TaskUnDeleteButton.propTypes = {
  unDeleteCheckFunc: PropTypes.func.isRequired,
};
