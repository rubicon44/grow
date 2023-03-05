import { MainWithHeader } from '../MainWithHeader';
import { TaskListContainer } from '../../organisms/tasks/TaskListContainer';

export const TaskShowTemplate = () => {
  return (
    <MainWithHeader>
      <TaskListContainer />
    </MainWithHeader>
  );
};