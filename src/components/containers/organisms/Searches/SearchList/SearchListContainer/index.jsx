import { useSearchResults } from 'hooks/useSearchResults';
import { useSortDescendingOrder } from 'hooks/useSortDescendingOrder';
import { SearchList } from 'components/containers/organisms/Searches/SearchList';

export const SearchListContainer = () => {
  const { handleSubmit, load, searchResultTasks, searchResultUsers } = useSearchResults();
  const sortDescendingOrderTasks = useSortDescendingOrder(searchResultTasks);
  const sortDescendingOrderUsers = useSortDescendingOrder(searchResultUsers);
  return <SearchList handleSubmit={handleSubmit} load={load} sortDescendingOrderTasks={sortDescendingOrderTasks} sortDescendingOrderUsers={sortDescendingOrderUsers} />;
};