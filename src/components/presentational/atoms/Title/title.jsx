import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h2`
  width: 288px;
  font-size: 36px;
  font-family: YuMincho;
`

export function Title(props) {
  return (
    <TitleStyle>{props.title}</TitleStyle>
  )
}