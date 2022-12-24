import React from 'react';
import { Main } from '../Main';
import { Header } from '../../organisms/Header';
import { SearchList } from '../../organisms/Searches/SearchList';

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