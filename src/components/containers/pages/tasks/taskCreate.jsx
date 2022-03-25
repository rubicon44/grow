import React from 'react';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { Title } from '../../../presentational/atoms/Title/index';
import { BackButton } from '../../../presentational/atoms/Button/backButton';
import { FormCreate } from '../../../containers/organisms/formCreate';

const TopBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 460px;
  text-align: center;
  background-color: #ddd;
`

export function TaskCreate() {
  return (
    <React.Fragment>
      <Header />
      <BackButton />
      <TopBackground>
        <Title title="新規登録" />
        <FormCreate />
      </TopBackground>
    </React.Fragment>
  );
}