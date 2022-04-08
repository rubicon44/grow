import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CreatedUser } from '../../atoms/Link/createdUser';

const ListStyle = styled.dl`
  min-width: 180px;
  max-width: 180px;
  margin-top: 15px;
  text-align: left;

  > dt {
    font-weight: bold;
  }

  > dd {
    min-height: 100px;
    margin: 10px 0 5px;
    padding: 5px;
    border: 1px solid #bbb;
    white-space: pre-wrap;
  }
`;

export function List(props) {
  const { taskId } = props;
  const { taskUserId } = props;
  const { title } = props;
  const { content } = props;
  const { taskCreatedUserId } = props;
  const { taskCreatedUserName } = props;
  return (
    <ListStyle>
      <dt>
        <Link to={`/users/${taskUserId}/tasks/${taskId}`}>{title}</Link>
      </dt>
      <dd>{content}</dd>
      <CreatedUser
        taskCreatedUserId={taskCreatedUserId}
        taskCreatedUserName={taskCreatedUserName}
      />
    </ListStyle>
  );
}

List.defaultProps = {
  taskId: '',
  taskUserId: '',
  title: '',
  content: '',
  taskCreatedUserId: '',
  taskCreatedUserName: '',
};

List.propTypes = {
  taskId: PropTypes.string,
  taskUserId: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  taskCreatedUserId: PropTypes.string,
  taskCreatedUserName: PropTypes.string,
};
