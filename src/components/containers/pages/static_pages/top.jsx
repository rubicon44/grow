import React from 'react';
import styled from 'styled-components';
import { mediaquery } from '../../../../assets/styles/variable';
import { NextButton } from '../../../presentational/atoms/Button/nextButton';
import { NextLink } from '../../../presentational/atoms/Link/nextLink';

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
`

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
`

export function Top() {
  return (
    <Main>
      <Title>Grow</Title>
      <NextButton text="タスク一覧" url="/tasks" />
      <NextButton text="会員登録" url="/sign_up" />
      <NextLink text="ログイン" url="/sign_in" />
    </Main>
  )
};