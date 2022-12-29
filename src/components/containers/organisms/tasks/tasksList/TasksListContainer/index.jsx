import React from 'react';
import styled from 'styled-components';
import { useTasks } from 'hooks/useTasks';
import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { useCurrentUserName } from 'hooks/useCurrentUserName';
import { NextButtonLink } from 'components/presentational/atoms/Link/NextButtonLink';
import { Title } from 'components/presentational/atoms/Title';
import { TasksList } from 'components/containers/organisms/Tasks/TasksList';

export const TasksListContainer = () => {
  const tasks = useTasks();
  const currentUserId = useCurrentUserId();
  const currentUserName = useCurrentUserName();
  return (
    <>
      <Title>タスク一覧</Title>
      <NextButtonLink text="タスク登録" url="/tasks/create" />
      <TasksList tasks={tasks} currentUserId={currentUserId} currentUserName={currentUserName} />
    </>
  );
}

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;