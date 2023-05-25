import { useLocation } from "react-router-dom";
import { TaskEditTemplate } from "../../templates/tasks/TaskEditTemplate";

export const TaskEdit = () => {
  const location = useLocation();
  const { task: taskDataTask } = location.state.taskData;

  return <TaskEditTemplate taskDataTask={taskDataTask} />;
};
