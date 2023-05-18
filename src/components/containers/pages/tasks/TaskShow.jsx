import { ErrorBoundary } from "../../organisms/ErrorBoundary";
import { TaskShowTemplate } from "../../templates/tasks/TaskShowTemplate";

export const TaskShow = () => (
  <ErrorBoundary>
    <TaskShowTemplate />
  </ErrorBoundary>
);
