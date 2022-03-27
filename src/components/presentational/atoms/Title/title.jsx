import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h2`
  font-size: 36px;
  font-family: YuMincho;
`

export function Title(props) {
  return (
    <TitleStyle>{props.title}</TitleStyle>
  )
}