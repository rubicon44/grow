import { memo } from 'react';
import { TaskForm } from 'components/containers/organisms/Tasks/TaskForm';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const TaskCreateForm = ({ handleTextSubmit, inputRef, isButtonDisabled, taskData }) => {
  const MemoTaskForm = memo(TaskForm);
  return (
    <>
      <TitleWithBackArrowHeader>新規登録</TitleWithBackArrowHeader>
      <MemoTaskForm
        handleTextSubmit={handleTextSubmit}
        inputRef={inputRef}
        isButtonDisabled={isButtonDisabled}
        taskData={taskData}
      />
    </>
  );
};