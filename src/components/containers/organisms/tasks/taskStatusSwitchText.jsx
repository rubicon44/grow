import React from 'react';
import PropTypes from 'prop-types';

export const TaskStatusSwitchText = ({ taskStatus }) => {
  switch(taskStatus) {
    case 0:
      return ( <>未対応</> )
    case 1:
      return ( <>処理中</> )
    case 2:
      return ( <>処理済み</> )
    case 3:
      return ( <>完了</> )
    default:
  };
  return null;
};

TaskStatusSwitchText.defaultProps = {
  taskStatus: 0,
};

TaskStatusSwitchText.propTypes = {
  taskStatus: PropTypes.number,
};