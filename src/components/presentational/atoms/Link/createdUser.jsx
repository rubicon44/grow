import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CreatedUserCover = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export function CreatedUser(props) {
  const { taskCreatedUserId } = props;
  const { taskCreatedUserName } = props;
  return (
    <CreatedUserCover>
      作成者:
      <Link to={`/users/${taskCreatedUserId}`}>{taskCreatedUserName}</Link>
    </CreatedUserCover>
  );
}

CreatedUser.defaultProps = {
  taskCreatedUserId: '',
  taskCreatedUserName: '',
};

CreatedUser.propTypes = {
  taskCreatedUserId: PropTypes.string,
  taskCreatedUserName: PropTypes.string,
};
