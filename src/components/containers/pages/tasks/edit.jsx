import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { Title } from '../../../presentational/atoms/Title/index';
import { BackButton } from '../../../presentational/atoms/Button/backButton';
import { TaskUpdateForm } from '../../organisms/tasks/taskUpdateForm';

const TopBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 460px;
  text-align: center;
  background-color: #ddd;
`

export function TaskEdit() {
  const location = useLocation();
  const id = location.state.id;
  const title = location.state.title;
  const content = location.state.content;
  const current_user_id = location.currentUserId;

  return (
    <React.Fragment>
      <Header />
      <BackButton />
      <TopBackground>
        <Title title="編集" />
        <TaskUpdateForm id={id} title={title} content={content} current_user_id={current_user_id} />
      </TopBackground>
    </React.Fragment>
  );
}