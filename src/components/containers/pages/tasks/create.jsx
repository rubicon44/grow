import React from 'react';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { Title } from '../../../presentational/atoms/Title/title';
import { BackButton } from '../../../presentational/atoms/Button/backButton';
import { TaskCreateForm } from '../../organisms/tasks/taskCreateForm';

const TopBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 460px;
  text-align: center;
  background-color: #ddd;
`

export function TaskCreate() {
  return (
    <React.Fragment>
      <Header />
      <BackButton />
      <TopBackground>
        <Title title="新規登録" />
        <TaskCreateForm />
      </TopBackground>
    </React.Fragment>
  );
}