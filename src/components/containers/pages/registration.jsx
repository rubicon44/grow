import React, { Component } from 'react';
import styled from 'styled-components';

const RegistrationBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f8f7f3;
`

const Title = styled.h1`
  width: 288px;
  font-size: 36px;
  font-family: YuMincho;
`

export default class Registration extends Component {
  render() {
    return (
        <div className="App">
        <RegistrationBackground>
            <Title>Grow</Title>
            <h2>会員登録</h2>
        </RegistrationBackground>
        </div>
    )
  }
};
