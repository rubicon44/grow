import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mediaquery } from '../../../../assets/styles/variable';

const LinkStyle = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 50px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  border: none;
  border-radius: 50px;
  background-color: #ff444f;

  ${mediaquery.desktop`
    width: 260px;
    height: 60px;
    font-size: 24px;
    line-height: 36px;
`}
`

const LoginText = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  text-decoration: underline;
`;

export function NextAuth(props) {
  return (
    <React.Fragment>
    {props.text === "会員登録" &&
      <LinkStyle to={props.url}>{props.text}</LinkStyle>
    }
    {props.text === "ログイン" &&
      <LoginText to={props.url}>{props.text}</LoginText>
    }
  </React.Fragment>
  )
}