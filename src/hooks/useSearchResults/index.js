import { useState } from 'react';
import { getSearches } from '../../infra/api';
import { useInputSanitization } from '../useInputSanitization';

export const useSearchResults = () => {
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
      const response = await getSearches(searchData)
      const searchResults = response.data;
      setSearchResults({
        tasks: searchResults.tasks,
        users: searchResults.users,
      });
    } catch (error) {
      setError(error);
      console.error(`検索中にエラーが発生しました。: `, error);
    } finally {
      setLoading(false);
      setIsButtonDisabled(false);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    const model = sanitizeInput(e.target.elements.model.value);
    const contents = sanitizeInput(e.target.elements.contents.value, { trim: true, ALLOWED_TAGS: [] });
    const method = sanitizeInput(e.target.elements.method.value);
    const searchData = { model: model, contents: contents, method: method };
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