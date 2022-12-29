import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { SearchList } from 'components/containers/organisms/Searches/SearchList';

export const SearchTemplate = () => {
  return (
    <MainWithHeader>
      <SearchList />
    </MainWithHeader>
  );
}