import React from 'react';
import styled from 'styled-components';
import { mediaquery } from '../../../../assets/styles/variable';
import { Header } from '../../organisms/header';

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

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 460px;
  text-align: center;

  ${mediaquery.desktop`
    max-width: 1280px;
    height: 700px;
  `}
`;

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