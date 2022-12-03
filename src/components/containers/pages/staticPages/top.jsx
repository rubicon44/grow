import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mediaquery } from '../../../../assets/styles/variable';
import { Main } from '../../templates/main';
import { Title } from '../../../presentational/atoms/Title';
import { NextButtonLink } from '../../../presentational/atoms/Link/nextButtonLink';

export function Top() {
  return (
    <TopMain>
      <TopTitle>Grow</TopTitle>
      <NextButtonLink text="会員登録" url="/signUp" />
      <LinkText to="/signIn">ログイン</LinkText>
    </TopMain>
  );
}

const TopMain = styled(Main)`
  > a:not(:first-of-type) {
    margin-top: 10px;
  }
`;

const TopTitle = styled(Title)`
  width: 288px;
  font-weight: 600;
  line-height: 130.2%;

  ${mediaquery.desktop`
    width: 100%;
    font-size: 46px;
    line-height: 69px;
  `}
`;

const LinkText = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  text-decoration: underline;
`;