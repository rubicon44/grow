import { useState } from 'react';
import { getSearches } from '../../infra/api';

export const useSearchResults = () => {
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
    const { model } = e.target.elements;
    const { contents } = e.target.elements;
    const { method } = e.target.elements;
    const searchData = { model: model.value, contents: contents.value, method: method.value };
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