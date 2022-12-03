import React, { useState, useEffect } from 'react';
import { getTasks, getCurrentUser } from '../../../../infra/api';
import styled from 'styled-components';
import { Title } from '../../../presentational/atoms/Title';
import { NextButtonLink } from '../../../presentational/atoms/Link/nextButtonLink';
import { List } from '../../../presentational/molecules/List';
import { TaskStatusSwitch } from './taskStatusSwitch';
import { LikeButton } from '../likes/likeButton';

export function TasksList() {
  const sortdOrder = (response) => {
    const list = response.data;
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
          const dOrderData = sortdOrder(response);
          setTasks(dOrderData);
        }
      })
      .catch();
    // .catch(() => {
    // });
    return () => {
      isMounted = false;
    };
  }, []);


  let currentUserDataText;
  let currentUserData;
  let currentUserId;
  let currentUserName;
  if(localStorage.getItem('user')) {
    currentUserDataText = localStorage.getItem('user');
    currentUserData = JSON.parse(currentUserDataText);
    currentUserId = String(currentUserData.id);
    currentUserName = String(currentUserData.username);
  }

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
          <LikeButton taskId={String(task.id)} currentUserId={String(currentUserId)} currentUserName={currentUserName} />
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