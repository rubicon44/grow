import React from 'react';
import styled from 'styled-components';
import { mediaquery } from '../../../../assets/styles/variable';
import { Header } from '../../organisms/header';
import { Main } from '../../templates/main';
import { Title } from '../../../presentational/atoms/Title';

export function NotFound() {
  return (
    <>
      <Header />
      <Main>
        <NotFoundTitle>お探しのページが見つかりません。</NotFoundTitle>
      </Main>
    </>
  );
}

const NotFoundTitle = styled(Title)`
  width: 288px;
  font-weight: 600;
  line-height: 130.2%;

  ${mediaquery.desktop`
    width: 100%;
    font-size: 46px;
    line-height: 69px;
  `}
`;