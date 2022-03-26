import React from 'react';
import styled from 'styled-components';

const CreatedUserCover = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`

export function CreatedUser(props) {
  return (
    <CreatedUserCover>
      作成者:{props.link}
    </CreatedUserCover>
  )
}