export const useHandleSuccessForSearches = (setSearchResults) => {
  const handleSuccessForTasks = (tasks) => {
    setSearchResults((prevSearchResults) => {
      const existingTasks = prevSearchResults || [];
      const newTasks = tasks.filter(
        (task) =>
          !existingTasks.some((existingTask) => existingTask.id === task.id)
      );
      return [...existingTasks, ...newTasks];
    });
  };

  const handleSuccessForUsers = (users) => {
    setSearchResults((prevSearchResults) => {
      const existingUsers = prevSearchResults || [];
      const newUsers = users.filter(
        (user) =>
          !existingUsers.some((existingUser) => existingUser.id === user.id)
      );
      return [...existingUsers, ...newUsers];
    });
  };

  return {
    handleSuccessForTasks,
    handleSuccessForUsers,
  };
};
