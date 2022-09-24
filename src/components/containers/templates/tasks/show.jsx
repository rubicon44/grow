import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { TaskList } from '../../organisms/tasks/taskList';

export function TaskShowTemplate(props) {
  const { task } = props;
  const { taskCreatedUser } = props;
  const { taskCreatedUserName } = props;
  const { currentUserId } = props;
  const { currentUserName } = props;

  return (
    <>
      <Header />
      <Main>
        <TaskList task={task} taskCreatedUser={taskCreatedUser} taskCreatedUserName={taskCreatedUserName} currentUserId={currentUserId} currentUserName={currentUserName} />
      </Main>
    </>
  );
}

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  text-align: center;
  background-color: #f8f7f3;
`;

TaskShowTemplate.defaultProps = {
  task: {},
  taskCreatedUser: {},
};

TaskShowTemplate.propTypes = {
  task: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    status: PropTypes.number,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    user_id: PropTypes.string,
    user: PropTypes.exact({
      id: PropTypes.number,
      nickname: PropTypes.string,
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
      email: PropTypes.string,
      firebase_id: PropTypes.string,
      password_digest: PropTypes.string,
      bio: PropTypes.string,
    }),
  }),
  taskCreatedUser: PropTypes.exact({
    id: PropTypes.number,
    nickname: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    email: PropTypes.string,
    firebase_id: PropTypes.string,
    password_digest: PropTypes.string,
    bio: PropTypes.string,
  }),
};
