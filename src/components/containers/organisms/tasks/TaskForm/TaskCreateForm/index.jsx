import { memo } from 'react';
import { TaskForm } from '../../TaskCreateForm';
import { TitleWithBackArrowHeader } from '../../../../../presentational/molecules/Header/TitleWithBackArrowHeader';

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