import { MainWithHeader } from '../MainWithHeader';
import { SearchListContainer } from '../../organisms/Searches/SearchListContainer';

export const SearchTemplate = () => {
  return (
    <MainWithHeader>
      <SearchListContainer />
    </MainWithHeader>
  );
};