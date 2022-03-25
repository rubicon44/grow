import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getTasks } from '../../../../infra/api';
import { Header } from '../../organisms/header';
import { Title } from '../../../presentational/atoms/Title/index';
import { NextTask } from '../../../presentational/atoms/Button/nextTask';

const LoginBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f8f7f3;
`

const TasksList = styled.dl`
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
    .catch(response => {
      console.log(response.data);
    });
    return () => { isMounted = false };
  }, [tasks]);

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

  const navigate = useNavigate();
  const userShowFunc = (task) => {
    navigate({
      state: {
        user_id: task.user.id,
      },
    });
  };

  return (
    <React.Fragment>
      <Header />
      <LoginBackground>
        <Title title="タスク一覧" />
        <NextTask text="タスク登録" url="/tasks/create" />
        <div>
          {tasks.map((task) => {
            return (
              <TasksList key={task.id}>
                <dt>
                  <Link to={`/users/${task.user_id}/tasks/${task.id}`}>{task.title}</Link>
                </dt>
                <dd>{task.content}</dd>
                <div>
                  by:
                  <Link to={`/users/${task.user.id}`} onClick={async() => await userShowFunc(task)}>{task.user.name}</Link>
                </div>
              </TasksList>
            );
          })}
        </div>
      </LoginBackground>
    </React.Fragment>
  )
};