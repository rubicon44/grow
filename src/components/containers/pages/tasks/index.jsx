import { ErrorBoundary } from '../../organisms/ErrorBoundary';
import { TasksTemplate } from '../../templates/Tasks/TasksTemplate';

export const Tasks = () => {
  return (
    <ErrorBoundary>
      <TasksTemplate />
    </ErrorBoundary>
  );
};