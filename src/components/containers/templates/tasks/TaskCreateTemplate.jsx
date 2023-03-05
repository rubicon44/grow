import { MainWithHeader } from '../mainWithHeader';
import { TaskCreateFormContainer } from '../../organisms/tasks/TaskForm/TaskCreateFormContainer';

export const TaskCreateTemplate = () => {
  return (
    <MainWithHeader>
      <TaskCreateFormContainer />
    </MainWithHeader>
  );
};