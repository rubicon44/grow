import { MainWithHeader } from '../MainWithHeader';
import { TaskCreateFormContainer } from '../../organisms/Tasks/TaskForm/TaskCreateFormContainer';

export const TaskCreateTemplate = () => {
  return (
    <MainWithHeader>
      <TaskCreateFormContainer />
    </MainWithHeader>
  );
};