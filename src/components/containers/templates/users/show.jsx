import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { UserTasksList } from '../../organisms/users/userTasksList';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f8f7f3;
`

export function UserShowTemplate(props) {
  const taskUser = props.taskUser;
  const userTasks = props.userTasks;
  const currentUserId = props.currentUserId;
  const currentUser = props.currentUser;
  return (
    <React.Fragment>
      <Header />
      <Main>
        <UserTasksList taskUser={taskUser} userTasks={userTasks} currentUserId={currentUserId} currentUser={currentUser} />
      </Main>
    </React.Fragment>
  )
};

UserShowTemplate.propTypes = {
  taskUser: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  userTasks: PropTypes.array,
  currentUserId: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
  ]),
  currentUser: PropTypes.object
};