import { SearchListSwitch } from '../searchListSwitch';

export const SearchListSwitchContainer = ({ error, loading, sortDescendingOrderTasks, sortDescendingOrderUsers }) => {
  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return <SearchListSwitch
           sortDescendingOrderTasks={sortDescendingOrderTasks}
           sortDescendingOrderUsers={sortDescendingOrderUsers}
         />;
};