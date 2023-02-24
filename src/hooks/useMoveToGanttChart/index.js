import { useNavigate } from 'react-router-dom';

export const useMoveToGanttChart = (userData) => {
  // todo: Consider whether I should use TaskEdit or EditTask name in Task's components later.
  const navigateToGanttChart = useNavigate();
  const moveToGanttChart = () => {
    navigateToGanttChart(`/${userData.taskUser.username}/gantt`, {
      state: {
        taskUser: userData.taskUser,
        userTasks: userData.userTasks,
      },
    });
  };

  return {
    moveToGanttChart,
  };
};