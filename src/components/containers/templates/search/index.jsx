import React from 'react';
import { Main } from '../main';
import { Header } from '../../organisms/header';
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