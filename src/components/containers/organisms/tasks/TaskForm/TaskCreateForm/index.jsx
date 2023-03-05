import { memo } from 'react';
import { TaskForm } from '..';
import { TitleWithBackArrowHeader } from '../../../../../presentational/molecules/header/titleWithBackArrowHeader';

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