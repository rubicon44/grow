import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTasks } from '../../../../infra/api';
import { currentUser } from '../../../../infra/currentUser';
import { Title } from '../../../presentational/atoms/Title';
import { NextButtonLink } from '../../../presentational/atoms/Link/nextButtonLink';
import { List } from '../../../presentational/molecules/List';
import { TaskStatusSwitch } from './taskStatusSwitch';
import { LikeButton } from '../likes/likeButton';

export const TasksList = () => {
  const sortdOrder = (data) => {
    const list = data;
    const dOrder = list.sort((a, b) => {
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

  const [tasks, setTasks] = useState([]);
  useEffect(async () => {
    let isMounted = true;
    await getTasks()
      .then((response) => {
        if (isMounted) {
          const dOrderData = sortdOrder(response.data);
          setTasks(dOrderData);
        }
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, []);

  const currentUserId = () => {
    if(localStorage.getItem('user')) {
      const id = currentUser().id;
      return id;
    }
    return null;
  };

  const currentUserName = () => {
    if(localStorage.getItem('user')) {
      const username = currentUser().username;
      return username;
    }
    return null;
  };

  return (
    <>
      <Title>タスク一覧</Title>
      <NextButtonLink text="タスク登録" url="/tasks/create" />
      {tasks.map((task) => (
        <ListCover key={task.id}>
          <List
            title={task.title}
            titleUrl={`/${task.user.username}/tasks/${String(task.id)}`}
            content={task.content}
            url={`/${task.user.username}`}
            text={task.user.nickname}
          />
          <TaskStatusSwitch taskStatus={task.status} />
          <LikeButton taskId={String(task.id)} currentUserId={String(currentUserId())} currentUserName={currentUserName()} />
        </ListCover>
      ))}
    </>
  );
}

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;