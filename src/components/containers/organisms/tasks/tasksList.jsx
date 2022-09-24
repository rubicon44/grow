import React, { useState, useEffect } from 'react';
import { getTasks, getCurrentUser } from '../../../../infra/api';
import styled from 'styled-components';
import { Title } from '../../../presentational/atoms/Title/title';
import { NextButton } from '../../../presentational/atoms/Button/nextButton';
import { List } from '../../../presentational/molecules/List/list';
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
      <Title title="タスク一覧" />
      <NextButton text="タスク登録" url="/tasks/create" />
      {tasks.map((task) => (
        <ListCover key={task.id}>
          <List
            taskUserId={String(task.user_id)}
            taskId={String(task.id)}
            title={task.title}
            content={task.content}
            startDate={task.start_date}
            endDate={task.end_date}
            taskCreatedUserName={String(task.user.username)}
            taskCreatedUserNickName={task.user.nickname}
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