import { useEffect } from "react";

export const useUpdateUserData = (userData, setUserData) => {
  useEffect(() => {
    if (userData && userData.tasks) {
      const updatedTasks = userData.tasks.map((task) => {
        if (task.user && task.user.nickname !== userData.nickname) {
          return {
            ...task,
            user: {
              ...task.user,
              nickname: userData.nickname,
            },
          };
        }
        return task;
      });

      // 現在のuserDataと新しいuserDataが異なる場合のみsetUserDataを呼び出す
      if (JSON.stringify(updatedTasks) !== JSON.stringify(userData.tasks)) {
        setUserData((prevUserData) => {
          if (prevUserData) {
            return {
              ...prevUserData,
              tasks: updatedTasks,
            };
          }
          return prevUserData;
        });
      }
    }

    if (userData && userData.likedTasks) {
      const updatedTasks = userData.likedTasks.map((task) => {
        if (task.user && task.user.nickname !== userData.nickname) {
          return {
            ...task,
            user: {
              ...task.user,
              nickname: userData.nickname,
            },
          };
        }
        return task;
      });

      // 現在のuserDataと新しいuserDataが異なる場合のみsetUserDataを呼び出す
      if (
        JSON.stringify(updatedTasks) !== JSON.stringify(userData.likedTasks)
      ) {
        setUserData((prevUserData) => {
          if (prevUserData) {
            return {
              ...prevUserData,
              likedTasks: updatedTasks,
            };
          }
          return prevUserData;
        });
      }
    }
  }, [userData, setUserData]);
};
