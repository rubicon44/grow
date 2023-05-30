import { useCurrentUserId } from "../../../../../hooks/useCurrentUserId";
import { useSearchResults } from "../../../../../hooks/useSearchResults";
import { SearchList } from "../SearchList";

export const SearchListContainer = () => {
  const currentUserId = useCurrentUserId();
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
      currentUserId={currentUserId}
      error={error}
      handleSubmit={handleSubmit}
      isButtonDisabled={isButtonDisabled}
      tasks={searchResultTasks}
      users={searchResultUsers}
    />
  );
};
