import { useSearchResults } from "../../../../../hooks/useSearchResults";
import { SearchList } from "../SearchList";

export const SearchListContainer = () => {
  const {
    error,
    handleSubmit,
    isButtonDisabled,
    searchResultTasks,
    searchResultUsers,
  } = useSearchResults();

  if (error) return <>Error...</>;
  if (searchResultTasks === null || searchResultUsers === null) {
    return null;
  }
  return (
    <SearchList
      error={error}
      handleSubmit={handleSubmit}
      isButtonDisabled={isButtonDisabled}
      tasks={searchResultTasks}
      users={searchResultUsers}
    />
  );
};
