import { MainWithHeader } from '../MainWithHeader';
import { TaskListContainer } from '../../organisms/Tasks/TaskListContainer';

export const TaskShowTemplate = () => {
  return (
    <MainWithHeader>
      <TaskListContainer />
    </MainWithHeader>
  );
};