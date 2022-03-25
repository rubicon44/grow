import React from 'react';
import styled from 'styled-components';

const ListStyle = styled.dl`
  text-align: left;

  > dt {
    font-weight: bold;
  }

  > dd {
    min-height: 100px;
    margin: 10px 0 5px;
    padding: 5px;
    border: 1px solid #bbb;
  }
`

export function List(props) {
  return (
    <ListStyle>
      <dt>{props.title}</dt>
      <dd>{props.content}</dd>
    </ListStyle>
  )
}