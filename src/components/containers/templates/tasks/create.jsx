import React from 'react';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { TaskCreateForm } from '../../organisms/tasks/createForm';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 10px;
  text-align: center;
  background-color: #ddd;
`

export function TaskCreateTemplate() {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <TaskCreateForm />
      </Main>
    </React.Fragment>
  );
}