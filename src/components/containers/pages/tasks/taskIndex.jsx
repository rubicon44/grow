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

const Title = styled.h1`
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
    getTasks()
    .then(results => {
      setTasks(results.data);
    })
    .catch(data => {
      console.log(data);
    });
  }, [tasks.length]);

  return (
    <div className="App">
      <Header />
      <LoginBackground>
        <Title>Grow</Title>
        <h2>タスク一覧</h2>

        <NextTask text="タスク登録" />
        <TaskListCover>
          {tasks.map((task) => {
            return (
              <TaskList key={task.id}>
                <dt>
                  <Link to={`tasks/${task.id}`}>{task.title}</Link>
                </dt>
                <dd>{task.content}</dd>
              </TaskList>
            );
          })}
        </TaskListCover>
      </LoginBackground>
    </div>
  )
};