import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { BackButton } from '../../../presentational/atoms/Button/backButton';
import { LogOutButton } from '../../../presentational/atoms/Button/logOut';
import { Title } from '../../../presentational/atoms/Title/title';
import { ProfileSwitch } from '../../organisms/users/profileSwitch';
import { UserTasksList } from '../../organisms/users/userTasksList';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f8f7f3;
`
const ContentHeader = styled.div`
  padding: 0 20px;
`

const Content = styled.article`
  border-top: 1px solid #ddd;
  width: 100%;
`

const LogOutButtonCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-top: 1px solid #000;
  box-sizing: border-box;
`

export function UserShowTemplate(props) {
  const taskUser = props.taskUser;
  const userTasks = props.userTasks;
  const currentUserId = props.currentUserId;
  const currentUser = props.currentUser;
  return (
    <React.Fragment>
      <Header />
      <BackButton />
      <Background>
        <ContentHeader>
          <Title title={taskUser.name} />
          <ProfileSwitch />
        </ContentHeader>
        <Content>
          <UserTasksList userTasks={userTasks} taskUser={taskUser} />
        </Content>
        {currentUserId === taskUser.id &&
          <LogOutButtonCover>
            { currentUser && <LogOutButton text="ログアウト" /> }
          </LogOutButtonCover>
        }
      </Background>
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