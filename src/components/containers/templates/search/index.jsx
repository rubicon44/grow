import React from 'react';
import { Main } from '../main';
import { Header } from '../../organisms/header';
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