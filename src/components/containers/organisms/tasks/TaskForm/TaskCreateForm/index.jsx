import { memo } from 'react';
import { TaskForm } from 'components/containers/organisms/Tasks/TaskForm';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const TaskCreateForm = ({ handleTextSubmit, inputRefs, isButtonDisabled, taskData }) => {
  const MemoTaskForm = memo(TaskForm);
  return (
    <>
      <TitleWithBackArrowHeader>新規登録</TitleWithBackArrowHeader>
      <MemoTaskForm
        handleTextSubmit={handleTextSubmit}
        inputRefs={inputRefs}
        isButtonDisabled={isButtonDisabled}
        taskData={taskData}
      />
    </>
  );
};