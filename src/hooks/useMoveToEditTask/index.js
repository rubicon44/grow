import { useNavigate } from 'react-router-dom';

export const useMoveToEditTask = (taskData) => {
  // todo: Consider whether I should use TaskEdit or EditTask name in Task's components later.
  const navigateToTaskEdit = useNavigate();
  const moveToEditTask = () => {
    if (!taskData.task) {
      console.error('taskData.task is undefined.');
      return;
    };

    const { id, title, content, status, start_date: startDate, end_date: endDate } = taskData.task;

    // todo: Change snake_case to camelCase later.
    // todo: Consider whether I should remove nest of task in taskData state later.
    navigateToTaskEdit(`/tasks/edit/${id}`, {
      state: {
        taskData: {
          task: {
            id,
            title,
            content,
            status,
            start_date: startDate,
            end_date: endDate,
          }
        }
      },
    });
  };

  return {
    moveToEditTask,
  };
};