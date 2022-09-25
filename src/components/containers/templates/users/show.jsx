import React from 'react';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { UserTasksList } from '../../organisms/users/userTasksList';

export function UserShowTemplate() {
  return (
    <>
      <Header />
      <Main>
        <UserTasksList />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f8f7f3;
`;