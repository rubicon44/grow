import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginText = styled(Link)`
  color: #ddd;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  text-decoration: underline;
`;

export function NextSignIn(props) {
  return (
    <LoginText to="/sign_in">{props.text}</LoginText>
  )
}