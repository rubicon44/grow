import React from 'react';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { FollowingsList } from '../../organisms/users/followingsList';

export function UserFollowingsTemplate() {
  return (
    <>
      <Header />
      <Main>
        <FollowingsList />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  text-align: center;
  background-color: #f8f7f3;
`;