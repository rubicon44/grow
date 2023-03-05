import { useSearchResults } from '../../../../../hooks/useSearchResults';
import { useSortDescendingOrder } from '../../../../../hooks/useSortDescendingOrder';
import { SearchList } from '../searchList';

export const SearchListContainer = () => {
  const { error, handleSubmit, isButtonDisabled, loading, searchResultTasks, searchResultUsers } = useSearchResults();
  const sortDescendingOrderTasks = useSortDescendingOrder(searchResultTasks);
  const sortDescendingOrderUsers = useSortDescendingOrder(searchResultUsers);

  return <SearchList
           error={error}
           handleSubmit={handleSubmit}
           isButtonDisabled={isButtonDisabled}
           loading={loading}
           sortDescendingOrderTasks={sortDescendingOrderTasks}
           sortDescendingOrderUsers={sortDescendingOrderUsers}
         />;
};