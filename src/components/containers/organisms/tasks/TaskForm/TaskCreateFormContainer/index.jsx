import { useTaskCreate } from "../../../../../../hooks/useTaskCreate";
import { TaskCreateForm } from "../TaskCreateForm";

export const TaskCreateFormContainer = () => {
  const { creating, handleTextSubmit, inputRefs, isButtonDisabled, taskData } =
    useTaskCreate();
  if (creating) return <>Creating...</>;
  return (
    <TaskCreateForm
      handleTextSubmit={handleTextSubmit}
      inputRefs={inputRefs}
      isButtonDisabled={isButtonDisabled}
      taskData={taskData}
    />
  );
};
