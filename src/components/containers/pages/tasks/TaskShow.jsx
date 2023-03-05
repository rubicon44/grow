import { ErrorBoundary } from '../../organisms/errorBoundary';
import { TaskShowTemplate } from '../../templates/tasks/taskShowTemplate';

export const TaskShow = () => {
  return (
    <ErrorBoundary>
      <TaskShowTemplate />
    </ErrorBoundary>
  );
};