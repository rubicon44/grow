import { MainWithHeader } from '../mainWithHeader';
import { TaskListContainer } from '../../organisms/tasks/TaskListContainer';

export const TaskShowTemplate = () => {
  return (
    <MainWithHeader>
      <TaskListContainer />
    </MainWithHeader>
  );
};