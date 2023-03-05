import { MainWithHeader } from '../mainWithHeader';
import { TaskCreateFormContainer } from '../../organisms/tasks/taskForm/taskCreateFormContainer';

export const TaskCreateTemplate = () => {
  return (
    <MainWithHeader>
      <TaskCreateFormContainer />
    </MainWithHeader>
  );
};