import React from 'react';
import { Header } from '../../organisms/header';
import { Main } from '../main';
import { SearchList } from '../../organisms/search/searchList';

export function SearchTemplate() {
  return (
    <>
      <Header />
      <Main>
        <SearchList />
      </Main>
    </>
  );
}