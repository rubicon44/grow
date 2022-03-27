import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTasks } from '../../../../infra/api';
import { Header } from '../../organisms/header';
import { Title } from '../../../presentational/atoms/Title/title';
import { NextTask } from '../../../presentational/atoms/Button/nextTask';
import { TasksList } from '../../organisms/tasks/tasksList';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f8f7f3;
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

  return (
    <React.Fragment>
      <Header />
      <Background>
        <Title title="タスク一覧" />
        <NextTask text="タスク登録" url="/tasks/create" />
        <TasksList tasks={tasks} />
      </Background>
    </React.Fragment>
  )
};