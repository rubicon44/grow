import React from 'react';
import styled from 'styled-components';
import { mediaquery } from '../../../../assets/styles/variable';
import { Header } from '../../organisms/header';
import { Main } from '../../templates/main';

export function NotFound() {
  return (
    <>
      <Header />
      <Main>
        <Title>お探しのページが見つかりません。</Title>
      </Main>
    </>
  );
}

const Title = styled.h2`
  width: 288px;
  font-size: 36px;
  font-weight: 600;
  font-family: serif;
  line-height: 130.2%;

  ${mediaquery.desktop`
    width: 100%;
    font-size: 46px;
    line-height: 69px;
  `}
`;