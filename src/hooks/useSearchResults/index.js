import { useMemo, useState } from 'react';
import { getSearches } from 'infra/api';

export const useSearchResults = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [searchResults, setSearchResults] = useState({
    taskUsers: [],
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
        taskUsers: searchResults.results.task_users,
        tasks: searchResults.results.tasks,
        users: searchResults.results.users,
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

  const TasksAndUsersMapArray = useMemo(() => {
    const tasks = searchResults.tasks;
    const taskUsers = searchResults.taskUsers;
    const TasksAndUsersMap = {};

    if (tasks) {
      tasks.forEach((task) => {
        const user = taskUsers[task.user_id];
        TasksAndUsersMap[task.id] = { ...task, user };
      });
    };

    return Object.values(TasksAndUsersMap);
  }, [searchResults.tasks, searchResults.taskUsers]);

  // todo: Fix re-rendering in searchResultTasks later.
  const searchResultTasks = TasksAndUsersMapArray;
  const searchResultUsers = searchResults.users;

  return { error, handleSubmit, isButtonDisabled, loading, searchResultTasks, searchResultUsers };
};