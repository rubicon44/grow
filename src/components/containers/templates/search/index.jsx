import React from 'react';
import { Header } from '../../organisms/header';
import { Main } from '../main';
import { SearchLists } from '../../organisms/search/searchLists';

export const SearchTemplate = () => {
  return (
    <>
      <Header />
      <Main>
        <SearchLists />
      </Main>
    </>
  );
}