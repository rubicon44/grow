import { useSearchResults } from '../../../../../hooks/useSearchResults';
import { SearchList } from '../SearchList';

export const SearchListContainer = () => {
  const { error, handleSubmit, isButtonDisabled, loading, searchResultTasks, searchResultUsers } = useSearchResults();
  return <SearchList
           error={error}
           handleSubmit={handleSubmit}
           isButtonDisabled={isButtonDisabled}
           loading={loading}
           tasks={searchResultTasks}
           users={searchResultUsers}
         />;
};