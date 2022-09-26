import React from 'react';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { FollowersList } from '../../organisms/users/followersList';

export function UserFollowersTemplate() {
  return (
    <>
      <Header />
      <Main>
        <FollowersList />
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