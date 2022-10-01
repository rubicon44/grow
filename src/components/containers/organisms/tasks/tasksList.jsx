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
  useEffect(() => {
    let isMounted = true;
    getTasks()
      .then((response) => {
        const dOrderData = sortdOrder(response);
        if (isMounted) setTasks(dOrderData);
      })
      .catch();
    // .catch(() => {
    // });
    return () => {
      isMounted = false;
    };
  }, [tasks]);

  const [currentUserId, setCurrentUserId] = useState([]);
  const [currentUserName, setCurrentUserName] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getCurrentUser()
      .then((response) => {
        const currentUserId = response.data.user.id;
        const currentUserName = response.data.user.username;
        if (isMounted) setCurrentUserId(currentUserId);
        if (isMounted) setCurrentUserName(currentUserName);
      })
      .catch();
    // .catch((data) => {
    // });
    return () => {
      isMounted = false;
    };
  }, [currentUserId]);

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