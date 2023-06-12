import { useCurrentUserId } from "../../../../../hooks/useCurrentUserId";
import { useGetErrorMessage } from "../../../../../hooks/useGetErrorMessage";
import { useSearchResults } from "../../../../../hooks/useSearchResults";
import { ErrorMessage } from "../../common/ErrorMessage";
import { SearchList } from "../SearchList";

export const SearchListContainer = () => {
  const currentUserId = useCurrentUserId();
  const { getErrorMessage } = useGetErrorMessage();
  const {
    error,
    handleSelectChange,
    handleSubmit,
    isButtonDisabled,
    outerElementTasksForSearchRef,
    outerElementUsersForSearchRef,
    searchResultTasks,
    searchResultUsers,
  } = useSearchResults();

  if (error) return <ErrorMessage errorMessage={getErrorMessage(error)} />;
  if (searchResultTasks === null || searchResultUsers === null) {
    return null;
  }
  return (
    <SearchList
      currentUserId={currentUserId}
      error={error}
      handleSelectChange={handleSelectChange}
      handleSubmit={handleSubmit}
      isButtonDisabled={isButtonDisabled}
      outerElementTasksForSearchRef={outerElementTasksForSearchRef}
      outerElementUsersForSearchRef={outerElementUsersForSearchRef}
      tasks={searchResultTasks}
      users={searchResultUsers}
    />
  );
};
