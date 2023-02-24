import { ErrorBoundary } from 'components/containers/organisms/ErrorBoundary';
import { TaskShowTemplate } from 'components/containers/templates/Tasks/TaskShowTemplate';

export const TaskShow = () => {
  return (
    <ErrorBoundary>
      <TaskShowTemplate />
    </ErrorBoundary>
  );
};