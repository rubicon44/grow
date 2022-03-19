import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getCurrentUser } from '../../../../infra/api';
import { Header } from '../../organisms/header';

const LoginBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f8f7f3;
`

const Title = styled.h2`
  width: 288px;
  font-size: 36px;
  font-family: YuMincho;
`

const TaskListCover = styled.div``

const TaskList = styled.dl`
  margin-top: 30px;
  text-align: left;

  > dt {
    font-weight: bold;
  }

  > dd {
    min-height: 100px;
    min-width: 180px;
    margin: 10px 0;
    padding: 5px;
    border: 1px solid #bbb;
  }
`

export function UserShow() {
  const [currentUser, setCurrentUser] = useState([]);
  const [userTasks, setUserTasks] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getCurrentUser()
    .then(response => {
      const currentUser = response.data.user;
      const taskData = response.data.tasks;
      const dOrderData = sortdOrder(taskData);
      if (isMounted) setCurrentUser(currentUser);
      if (isMounted) setUserTasks(dOrderData);
    })
    .catch(data => {
      console.log(data);
    });
    return () => { isMounted = false };
  }, [userTasks]);

  const sortdOrder = (taskData) => {
    const list = taskData;
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
  };

  return (
    <React.Fragment>
      <Header />
      <LoginBackground>
        <Title>{currentUser.name}</Title>

        <TaskListCover>
          {userTasks.map((task) => {
            return (
              <TaskList key={task.id}>
                <dt>
                  <Link to={`tasks/${task.id}`}>{task.title}</Link>
                </dt>
                <dd>{task.content}</dd>
                <div>by:{task.user_id}</div>
              </TaskList>
            );
          })}
        </TaskListCover>
      </LoginBackground>
    </React.Fragment>
  )
};