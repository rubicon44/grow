import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export function CreatedUser(props) {
  const { taskCreatedUserName } = props;
  const { taskCreatedUserNickName } = props;
  return (
    <CreatedUserCover>
      作成者:
      <Link to={`/${taskCreatedUserName}`}>{taskCreatedUserNickName}</Link>
    </CreatedUserCover>
  );
}

const CreatedUserCover = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

CreatedUser.defaultProps = {
  taskCreatedUserId: '',
  taskCreatedUserNickName: '',
};

CreatedUser.propTypes = {
  taskCreatedUserId: PropTypes.string,
  taskCreatedUserNickName: PropTypes.string,
};
