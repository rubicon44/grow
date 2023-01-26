import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { TaskCreateFormContainer } from 'components/containers/organisms/Tasks/TaskForm/TaskCreateForm/TaskCreateFormContainer';

export const TaskCreateTemplate = () => {
  return (
    <MainWithHeader>
      <TaskCreateFormContainer />
    </MainWithHeader>
  );
};