import React from 'react';
import { Header } from '../../organisms/header';
import { Main } from '../main';
import { SearchList } from '../../organisms/search/searchList';

export const SearchTemplate = () => {
  return (
    <>
      <Header />
      <Main>
        <SearchList />
      </Main>
    </>
  );
}