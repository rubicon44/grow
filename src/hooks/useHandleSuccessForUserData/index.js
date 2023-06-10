export const useHandleSuccessForUserData = (setUserData) => {
  const handleSuccessForDefault = (userData) => {
    const { likedTasks, ...newUserData } = userData;
    const newDataWithLikedTasksKey = { ...newUserData, likedTasks };
    setUserData((prevUserData) => {
      if (prevUserData) {
        // 重複を避けるために、新しいタスクを追加する前に重複をフィルタリング
        const filteredLikedTasks = newDataWithLikedTasksKey.likedTasks.filter(
          (newTask) =>
            prevUserData &&
            prevUserData.likedTasks &&
            !prevUserData.likedTasks.find(
              (existingTask) => existingTask.id === newTask.id
            )
        );

        const filteredTasks = newDataWithLikedTasksKey.tasks.filter(
          (newTask) =>
            !prevUserData.tasks.find(
              (existingTask) => existingTask.id === newTask.id
            )
        );

        return {
          ...prevUserData,
          ...newDataWithLikedTasksKey,
          likedTasks: prevUserData.likedTasks
            ? [...prevUserData.likedTasks, ...filteredLikedTasks]
            : filteredLikedTasks,
          tasks: prevUserData.tasks
            ? [...prevUserData.tasks, ...filteredTasks]
            : filteredTasks,
        };
      }
      return newDataWithLikedTasksKey;
    });
  };

  const handleSuccessForTasks = (userData) => {
    const { ...newUserData } = userData;
    const newDataWithTasksKey = { ...newUserData };
    setUserData((prevUserData) => {
      if (prevUserData) {
        const filteredTasks = newDataWithTasksKey.tasks.filter(
          (newTask) =>
            !prevUserData.tasks.find(
              (existingTask) => existingTask.id === newTask.id
            )
        );

        const updatedTasks = prevUserData.tasks.map((existingTask) => {
          const matchingTask = newDataWithTasksKey.tasks.find(
            (newTask) => newTask.id === existingTask.id
          );
          return matchingTask || existingTask;
        });

        return {
          ...prevUserData,
          ...newDataWithTasksKey,
          tasks: [...updatedTasks, ...filteredTasks],
        };
      }
      return newDataWithTasksKey;
    });
  };

  const handleSuccessForLikedTasks = (userData) => {
    const { likedTasks, ...newUserData } = userData;
    const newDataWithLikedTasksKey = { ...newUserData, likedTasks };

    setUserData((prevUserData) => {
      if (prevUserData) {
        // 重複を避けるために、新しいタスクを追加する前に重複をフィルタリング
        const filteredLikedTasks = newDataWithLikedTasksKey.likedTasks.filter(
          (newTask) =>
            !prevUserData.likedTasks.find(
              (existingTask) => existingTask.id === newTask.id
            )
        );

        const updatedLikedTasks = prevUserData.likedTasks.map(
          (existingTask) => {
            const matchingTask = newDataWithLikedTasksKey.likedTasks.find(
              (newTask) => newTask.id === existingTask.id
            );
            return matchingTask || existingTask;
          }
        );

        const updatedTasks = prevUserData.tasks.map((task) => {
          const updatedTaskUser =
            updatedLikedTasks.find((likedTask) => likedTask.id === task.id)
              ?.user || task.user;
          return {
            ...task,
            user: updatedTaskUser,
          };
        });

        return {
          ...prevUserData,
          ...newDataWithLikedTasksKey,
          likedTasks: [...prevUserData.likedTasks, ...filteredLikedTasks],
          tasks: updatedTasks,
        };
      }
      return newDataWithLikedTasksKey;
    });
  };

  return {
    handleSuccessForDefault,
    handleSuccessForLikedTasks,
    handleSuccessForTasks,
  };
};
