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
    model,
    outerElementTasksForSearchRef,
    outerElementUsersForSearchRef,
    searchPerformed,
    tasks,
    users,
  } = useSearchResults();

  if (error) return <ErrorMessage errorMessage={getErrorMessage(error)} />;
  return (
    <SearchList
      currentUserId={currentUserId}
      error={error}
      handleSelectChange={handleSelectChange}
      handleSubmit={handleSubmit}
      isButtonDisabled={isButtonDisabled}
      model={model}
      outerElementTasksForSearchRef={outerElementTasksForSearchRef}
      outerElementUsersForSearchRef={outerElementUsersForSearchRef}
      searchPerformed={searchPerformed}
      tasks={tasks}
      users={users}
    />
  );
};
