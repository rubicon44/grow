import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getUser } from '../../../../infra/api';
import { Header } from '../../organisms/header';
import { AuthContext } from '../../../../auth/authProvider';
import { BackButton } from '../../../presentational/atoms/Button/backButton';
import { LogOutButton } from '../../../presentational/atoms/Button/logOut';
import { Title } from '../../../presentational/atoms/Title/title';
import { getCurrentUser } from '../../../../infra/api';
import { ProfileSwitch } from './profileSwitch';
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

export function UserShow() {
  const location = useLocation();
  const locationPathName = location.pathname.split("/");
  const user_id = locationPathName[locationPathName.length -1];

  const [taskUser, setTaskUser] = useState([]);
  const [userTasks, setUserTasks] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getUser(user_id)
    .then(response => {
      const taskUser = response.data.user;
      let taskData = taskUser.tasks;
      const dOrderData = sortdOrder(taskData);
      if (isMounted) setTaskUser(taskUser);
      if (isMounted) setUserTasks(dOrderData);
    })
    .catch(data => {
      console.log(data);
    });
    return () => { isMounted = false };
  }, [user_id, taskUser]);

  const sortdOrder = (taskData) => {
    const list = taskData;
    if (list.length === 0) {
      const dOrder = [];
      return dOrder;
    } else {
      const dOrder = list.sort(function (a, b) {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
        return 0;
      });
      return dOrder;
    }
  };

  const { currentUser } = useContext(AuthContext);
  const [currentUserId, setCurrentUserId] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getCurrentUser()
    .then(response => {
      const currentUserId = response.data.user.id;
      if (isMounted) setCurrentUserId(currentUserId);
    })
    .catch(data => {
      console.log(data);
    });
    return () => { isMounted = false };
  }, [currentUserId]);

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