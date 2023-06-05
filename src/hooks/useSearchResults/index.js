import { useState } from "react";
import { getSearches } from "../../infra/api";
import { useGetErrorMessage } from "../useGetErrorMessage";
import { useInputSanitization } from "../useInputSanitization";

export const useSearchResults = () => {
  const { getErrorMessage } = useGetErrorMessage();
  const { sanitizeInput } = useInputSanitization();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [searchResults, setSearchResults] = useState({
    tasks: [],
    users: [],
  });

  const fetchSearchesData = async (searchData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getSearches(searchData);
      const searchResults = response.data;
      const transformedSearchResults = {
        tasks: searchResults.tasks
          ? searchResults.tasks.map((task) => ({
              ...task,
              id: task.id.toString(),
              userId: task.userId.toString(),
              user: {
                ...task.user,
                id: task.user.id.toString(),
              },
            }))
          : [],
        users: searchResults.users
          ? searchResults.users.map((user) => ({
              ...user,
              id: user.id.toString(),
            }))
          : [],
      };
      setSearchResults(transformedSearchResults);
    } catch (error) {
      setError(error);
      const verbForErrorMessage = `データ`;
      const objectForErrorMessage = `検索`;
      getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
    } finally {
      setLoading(false);
      setIsButtonDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    const model = sanitizeInput(e.target.elements.model.value);
    const contents = sanitizeInput(e.target.elements.contents.value, {
      trim: true,
      ALLOWED_TAGS: [],
    });
    const method = "partial";
    const searchData = { model, contents, method };
    fetchSearchesData(searchData);
  };

  return {
    error,
    handleSubmit,
    isButtonDisabled,
    loading,
    searchResultTasks: searchResults.tasks || [],
    searchResultUsers: searchResults.users || [],
  };
};
