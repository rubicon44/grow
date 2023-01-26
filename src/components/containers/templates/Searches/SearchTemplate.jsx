import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { SearchListContainer } from 'components/containers/organisms/Searches/SearchList/SearchListContainer';

export const SearchTemplate = () => {
  return (
    <MainWithHeader>
      <SearchListContainer />
    </MainWithHeader>
  );
};