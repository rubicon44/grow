import { MainWithHeader } from '../mainWithHeader';
import { TasksListContainer } from '../../organisms/tasks/TasksListContainer';

export const TasksTemplate = () => {
  return (
    <MainWithHeader>
      <TasksListContainer />
    </MainWithHeader>
  );
};