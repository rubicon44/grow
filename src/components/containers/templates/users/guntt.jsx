import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { GunttChart } from '../../organisms/tasks/ganttChart';

export function UserGunttTemplate(props) {
  const { taskUser } = props;
  const { userTasks } = props;
  return (
    <>
      <Header />
      <Main>
        <GunttChart userTasks={userTasks} taskUser={taskUser} />
      </Main>
    </>
  );
}

const Main = styled.main`
  text-align: center;
  background-color: #f8f7f3;
`;

UserGunttTemplate.defaultProps = {
  taskUser: {},
  userTasks: [],
};

UserGunttTemplate.propTypes = {
  taskUser: PropTypes.exact({
    id: PropTypes.number,
    nickname: PropTypes.string,
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
};