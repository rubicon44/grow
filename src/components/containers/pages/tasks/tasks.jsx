import { ErrorBoundary } from "../../organisms/ErrorBoundary";
import { TasksTemplate } from "../../templates/tasks/tasksTemplate";

export const Tasks = () => (
  <ErrorBoundary>
    <TasksTemplate />
  </ErrorBoundary>
);
