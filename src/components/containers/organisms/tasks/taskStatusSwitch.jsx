import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TaskStatusSwitch = ({ taskStatus }) => {
  const componentMap = {
    0: <TaskStatusNot>未対応</TaskStatusNot>,
    1: <TaskStatusProcess>処理中</TaskStatusProcess>,
    2: <TaskStatusProcessed>処理済み</TaskStatusProcessed>,
    3: <TaskStatusDone>完了</TaskStatusDone>
  };
  const Component = componentMap[taskStatus];
  return Component;
};

const TaskStatusNot = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  width: 64px;
  text-align: center;
  border-radius: 10px;
  font-size: 12px;
  color: #fff;
  background: #ed8077;
`;

const TaskStatusProcess = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  width: 64px;
  text-align: center;
  border-radius: 10px;
  font-size: 12px;
  color: #fff;
  background: #4484c5;
`;


const TaskStatusProcessed = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  width: 64px;
  text-align: center;
  border-radius: 10px;
  font-size: 12px;
  color: #fff;
  background: #5eb5a6;
`;


const TaskStatusDone = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  width: 64px;
  text-align: center;
  border-radius: 10px;
  font-size: 12px;
  color: #fff;
  background: #a1af2f;
`;

TaskStatusSwitch.defaultProps = {
  taskStatus: 0,
};

TaskStatusSwitch.propTypes = {
  taskStatus: PropTypes.number,
};