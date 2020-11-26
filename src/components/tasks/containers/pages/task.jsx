import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 460px;
  text-align: center;
  background-color: #f8f7f3;
`

const Title = styled.h1`
  width: 288px;
  font-size: 36px;
  font-family: YuMincho;
`

class Task extends Component {
  render() {
      return (
        <div className="App">
          <LoginBackground>
              <Title>Grow</Title>
              <p>タスク一覧</p>
          </LoginBackground>
        </div>
      )
  }
};

export default Task;