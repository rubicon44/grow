import { MainWithHeader } from '../MainWithHeader';
import { TasksListContainer } from '../../organisms/Tasks/TasksListContainer';

export const TasksTemplate = () => {
  return (
    <MainWithHeader>
      <TasksListContainer />
    </MainWithHeader>
  );
};