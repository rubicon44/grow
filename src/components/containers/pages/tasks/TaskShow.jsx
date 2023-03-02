import { ErrorBoundary } from '../../organisms/ErrorBoundary';
import { TaskShowTemplate } from '../../templates/Tasks/TaskShowTemplate';

export const TaskShow = () => {
  return (
    <ErrorBoundary>
      <TaskShowTemplate />
    </ErrorBoundary>
  );
};