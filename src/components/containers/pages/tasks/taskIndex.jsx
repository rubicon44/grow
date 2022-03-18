import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getTasks } from '../../../../infra/api';
import { Header } from '../../organisms/header';
import { NextTask } from '../../../presentational/atoms/nextButton/task';

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

// task一覧表示
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

export function TaskIndex() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getTasks()
    .then(response => {
      const dOrderData = sortdOrder(response);
      if (isMounted) setTasks(dOrderData);
    })
    .catch(data => {
      console.log(data);
    });
    return () => { isMounted = false };
  }, [tasks]);

  // const sortAOrder = () => {
  //   const list = tasks;
  //   const aOrder = list.sort(function (a, b) {
  //     if (a.id < b.id) {
  //       return -1;
  //     }
  //     if (a.id > b.id) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   return aOrder;
  // };

  const sortdOrder = (response) => {
    const list = response.data;
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
    <div className="App">
      <Header />
      <LoginBackground>
        <Title>タスク一覧</Title>

        <NextTask text="タスク登録" />
        <TaskListCover>
          {tasks.map((task) => {
            return (
              <TaskList key={task.id}>
                <dt>
                  <Link to={`${task.id}`}>{task.title}</Link>
                </dt>
                <dd>{task.content}</dd>
                <div>by:{task.user_id}</div>
              </TaskList>
            );
          })}
        </TaskListCover>
      </LoginBackground>
    </div>
  )
};