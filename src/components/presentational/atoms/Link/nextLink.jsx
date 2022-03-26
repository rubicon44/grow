import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyle = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  text-decoration: underline;
`;

export function NextLink(props) {
  return (
    <LinkStyle to={props.url}>{props.text}</LinkStyle>
  )
}