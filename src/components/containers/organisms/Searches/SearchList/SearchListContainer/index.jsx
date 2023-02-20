import { useSearchResults } from 'hooks/useSearchResults';
import { useSortDescendingOrder } from 'hooks/useSortDescendingOrder';
import { SearchList } from 'components/containers/organisms/Searches/SearchList';

export const SearchListContainer = () => {
  const { handleSubmit, isButtonDisabled, searchResultTasks, searchResultUsers } = useSearchResults();
  const sortDescendingOrderTasks = useSortDescendingOrder(searchResultTasks);
  const sortDescendingOrderUsers = useSortDescendingOrder(searchResultUsers);
  return <SearchList handleSubmit={handleSubmit} isButtonDisabled={isButtonDisabled} sortDescendingOrderTasks={sortDescendingOrderTasks} sortDescendingOrderUsers={sortDescendingOrderUsers} />;
};