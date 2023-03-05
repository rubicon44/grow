import { MainWithHeader } from '../mainWithHeader';
import { TasksListContainer } from '../../organisms/tasks/tasksListContainer';

export const TasksTemplate = () => {
  return (
    <MainWithHeader>
      <TasksListContainer />
    </MainWithHeader>
  );
};