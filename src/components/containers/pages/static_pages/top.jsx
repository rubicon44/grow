import React, { Component } from 'react';
import styled from 'styled-components';
import mediaquery from '../../../../assets/styles/variable';

import NextSignUp from '../../../presentational/atoms/nextButton/sign_up';
import NextSignIn from '../../../presentational/atoms/nextButton/sign_in';
import NextTask from '../../../presentational/atoms/nextButton/task';

const TopBackground = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 460px;
  text-align: center;

  ${mediaquery.desktop`
    max-width: 1280px;
    height: 700px;
  `}
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

class Top extends Component {
  render() {
    return (
      <div>
        <TopBackground>
          <Title>Grow</Title>
          <NextTask text="タスク一覧" />
          <NextSignUp text="まずは会員登録" />
          <NextSignIn />
        </TopBackground>
      </div>
    )
  }
}

export default Top;