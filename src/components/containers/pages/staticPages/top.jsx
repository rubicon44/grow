import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mediaquery } from '../../../../assets/styles/variable';
import { NextLinkButton } from '../../../presentational/atoms/Link/nextLinkButton';

export function Top() {
  return (
    <Main>
      <Title>Grow</Title>
      <NextLinkButton text="タスク一覧" url="/tasks" />
      <NextLinkButton text="会員登録" url="/signUp" />
      <LinkText to="/signIn">ログイン</LinkText>
    </Main>
  );
}

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 460px;
  text-align: center;

  > a:not(:first-of-type) {
    margin-top: 10px;
  }
`;

const Title = styled.h2`
  width: 288px;
  font-size: 36px;
  font-weight: 600;
  font-family: serif;
  line-height: 130.2%;

  ${mediaquery.desktop`
    width: 100%;
    font-size: 46px;
    line-height: 69px;
  `}
`;

const LinkText = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  text-decoration: underline;
`;