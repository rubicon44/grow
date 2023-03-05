import { MainWithHeader } from '../mainWithHeader';
import { TaskListContainer } from '../../organisms/tasks/taskListContainer';

export const TaskShowTemplate = () => {
  return (
    <MainWithHeader>
      <TaskListContainer />
    </MainWithHeader>
  );
};