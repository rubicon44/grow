import { SearchListSwitch } from 'components/containers/organisms/Searches/SearchList/SearchListSwitch';

export const SearchListSwitchContainer = ({ error, loading, sortDescendingOrderTasks, sortDescendingOrderUsers }) => {
  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return <SearchListSwitch
           sortDescendingOrderTasks={sortDescendingOrderTasks}
           sortDescendingOrderUsers={sortDescendingOrderUsers}
         />;
};