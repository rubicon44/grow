import { MainWithHeader } from '../mainWithHeader';
import { SearchListContainer } from '../../organisms/searches/searchListContainer';

export const SearchTemplate = () => {
  return (
    <MainWithHeader>
      <SearchListContainer />
    </MainWithHeader>
  );
};