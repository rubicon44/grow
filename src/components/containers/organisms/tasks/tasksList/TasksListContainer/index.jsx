import React from 'react';
import styled from 'styled-components';
import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { useCurrentUserName } from 'hooks/useCurrentUserName';
import { useTasks } from 'hooks/useTasks';
import { NextButtonLink } from 'components/presentational/atoms/Link/NextButtonLink';
import { Title } from 'components/presentational/atoms/Title';
import { TasksList } from 'components/containers/organisms/Tasks/TasksList';

export const TasksListContainer = () => {
  const currentUserId = useCurrentUserId();
  const currentUserName = useCurrentUserName();
  const tasks = useTasks();
  return (
    <>
      <Title>タスク一覧</Title>
      <NextButtonLink text="タスク登録" url="/tasks/create" />
      <TasksList currentUserId={currentUserId} currentUserName={currentUserName} tasks={tasks}  />
    </>
  );
}

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;