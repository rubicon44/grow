export const useUserDataTransformation = () => {
  const handleTransformedUserDataForDefault = (userData) => {
    const transformedUserData = {
      ...userData,
      id: userData.id.toString(),
      likedTasks: userData.likedTasks.map((likedTask) => ({
        ...likedTask,
        id: likedTask.id.toString(),
        userId: likedTask.userId.toString(),
        user: {
          ...likedTask.user,
          id: likedTask.user.id.toString(),
        },
      })),
      tasks: userData.tasks.map((task) => ({
        ...task,
        id: task.id.toString(),
        userId: task.userId.toString(),
        user: {
          ...task.user,
          id: task.user.id.toString(),
        },
      })),
    };
    return transformedUserData;
  };

  const handleTransformedUserDataForTasks = (userData) => {
    const transformedUserData = {
      ...userData,
      id: userData.id.toString(),
      tasks: userData.tasks.map((task) => ({
        ...task,
        id: task.id.toString(),
        userId: task.userId.toString(),
        user: {
          ...task.user,
          id: task.user.id.toString(),
        },
      })),
    };
    return transformedUserData;
  };

  const handleTransformedUserDataForLikedTasks = (userData) => {
    const transformedUserData = {
      ...userData,
      id: userData.id.toString(),
      likedTasks: userData.likedTasks.map((likedTask) => ({
        ...likedTask,
        id: likedTask.id.toString(),
        userId: likedTask.userId.toString(),
        user: {
          ...likedTask.user,
          id: likedTask.user.id.toString(),
        },
      })),
    };
    return transformedUserData;
  };

  return {
    handleTransformedUserDataForDefault,
    handleTransformedUserDataForTasks,
    handleTransformedUserDataForLikedTasks,
  };
};
