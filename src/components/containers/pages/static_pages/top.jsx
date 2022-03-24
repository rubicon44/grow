import React from 'react';
import styled from 'styled-components';
import { mediaquery } from '../../../../assets/styles/variable';
import { NextAuth } from '../../../presentational/atoms/Button/nextAuth';
import { NextTask } from '../../../presentational/atoms/Button/nextTask';

const TopBackground = styled.div`
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
    <TopBackground>
      <Title>Grow</Title>
      <NextTask text="タスク一覧" url="/tasks" />
      <NextAuth text="会員登録" url="/sign_up" />
      <NextAuth text="ログイン" url="/sign_in" />
    </TopBackground>
  )
};