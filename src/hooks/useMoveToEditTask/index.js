import { useNavigate } from "react-router-dom";

export const useMoveToEditTask = (taskData) => {
  // todo: Consider whether I should use TaskEdit or EditTask name in Task's components later.
  const navigateToTaskEdit = useNavigate();
  const moveToEditTask = () => {
    if (!taskData.task) {
      alert("taskData.task is undefined.");
      return;
    }

    const { id, title, content, status, startDate, endDate } = taskData.task;
    // todo: Consider whether I should remove nest of task in taskData state later.
    navigateToTaskEdit(`/tasks/edit/${id}`, {
      state: {
        taskData: {
          task: { id, title, content, status, startDate, endDate },
        },
      },
    });
  };

  return {
    moveToEditTask,
  };
};
