import { useState } from 'react';
import { getSearches } from 'infra/api';

export const useSearchResults = () => {
  const [load, setLoad] = useState(false);
  const [searchResults, setSearchResults] = useState({
    users: [],
    taskUsers: [],
    tasks: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    const { model } = e.target.elements;
    const { contents } = e.target.elements;
    const { method } = e.target.elements;
    const searchData = { model: model.value, contents: contents.value, method: method.value };
    let isMounted = true;
    getSearches(searchData)
      .then((response) => {
        if (isMounted) setSearchResults({
          users: response.data.results.users,
          taskUsers: response.data.results.task_users,
          tasks: response.data.results.tasks,
        });
      })
      .catch();
    setLoad(false);
    return () => {
      isMounted = false;
    };
  };

  const TasksAndUsersMapArray = () => {
    const tasks = searchResults.tasks;
    const taskUsers = searchResults.taskUsers;
    const TasksAndUsersMap = {};
    if(tasks) {
      tasks.forEach(task => {
        TasksAndUsersMap[task.id] = { ...task, user: taskUsers.find(user => user.id === task.user_id) }
      })
    };
    const TasksAndUsersMapArray = Object.values(TasksAndUsersMap);
    return TasksAndUsersMapArray;
  };

  const searchResultTasks = TasksAndUsersMapArray();
  const searchResultUsers = searchResults.users;

  return { handleSubmit, load, searchResultTasks, searchResultUsers };
};