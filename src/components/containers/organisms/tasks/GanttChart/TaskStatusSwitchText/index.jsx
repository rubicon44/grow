import PropTypes from 'prop-types';

export const TaskStatusSwitchText = ({ taskStatus }) => {
  const componentMap = {
    0: "未対応",
    1: "処理中",
    2: "処理済み",
    3: "完了"
  };
  const Component = componentMap[taskStatus];
  return Component;
};

TaskStatusSwitchText.propTypes = {
  taskStatus: PropTypes.number.isRequired,
};