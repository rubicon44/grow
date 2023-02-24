import { ErrorBoundary } from 'components/containers/organisms/ErrorBoundary';
import { TasksTemplate } from 'components/containers/templates/Tasks/TasksTemplate';

export const Tasks = () => {
  return (
    <ErrorBoundary>
      <TasksTemplate />
    </ErrorBoundary>
  );
};