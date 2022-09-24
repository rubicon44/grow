import React from 'react';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { TaskList } from '../../organisms/tasks/taskList';

export function TaskShowTemplate() {
  return (
    <>
      <Header />
      <Main>
        <TaskList />
      </Main>
    </>
  );
}

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  text-align: center;
  background-color: #f8f7f3;
`;