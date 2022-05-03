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
`;

export function UserShowTemplate(props) {
  const { taskUser } = props;
  const { userTasks } = props;
  const { userLikedTasks } = props;
  const { taskCreatedUser } = props;
  const { currentUserId } = props;
  const { currentUserAble } = props;
  return (
    <>
      <Header />
      <Main>
        <UserTasksList
          taskUser={taskUser}
          userTasks={userTasks}
          userLikedTasks={userLikedTasks}
          taskCreatedUser={taskCreatedUser}
          currentUserId={currentUserId}
          currentUserAble={currentUserAble}
        />
      </Main>
    </>
  );
}

UserShowTemplate.defaultProps = {
  taskUser: {},
  userTasks: [],
  currentUserId: '',
  currentUserAble: false,
};

UserShowTemplate.propTypes = {
  taskUser: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    email: PropTypes.string,
    firebase_id: PropTypes.string,
    password_digest: PropTypes.string,
    bio: PropTypes.string,
    tasks: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        status: PropTypes.number,
        start_date: PropTypes.string,
        end_date: PropTypes.string,
        created_at: PropTypes.string,
        updated_at: PropTypes.string,
        user_id: PropTypes.string,
      })
    ),
  }),
  userTasks: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      status: PropTypes.number,
      start_date: PropTypes.string,
      end_date: PropTypes.string,
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
      user_id: PropTypes.string,
    })
  ),
  currentUserId: PropTypes.string,
  currentUserAble: PropTypes.bool,
  // currentUser: PropTypes.exact({
  //   uid: PropTypes.string,
  //   email: PropTypes.string,
  // }),
};
