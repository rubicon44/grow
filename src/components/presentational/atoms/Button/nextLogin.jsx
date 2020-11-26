import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginText = styled(Link)`
  color: #ddd;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  text-decoration: underline;
`;

class LoginButton extends Component {
  render() {
    return (
      <div>
        <LoginText to="/login">ログイン</LoginText>
      </div>
    )
  }
}

export default LoginButton;