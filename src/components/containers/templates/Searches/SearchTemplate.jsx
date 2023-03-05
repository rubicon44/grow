import { MainWithHeader } from '../mainWithHeader';
import { SearchListContainer } from '../../organisms/Searches/SearchListContainer';

export const SearchTemplate = () => {
  return (
    <MainWithHeader>
      <SearchListContainer />
    </MainWithHeader>
  );
};