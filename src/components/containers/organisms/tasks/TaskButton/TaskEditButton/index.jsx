export const TaskEditButton = ({ currentUserId, isButtonDisabled, nextEditTaskFunc, taskCreatedUserId }) => {
  return String(taskCreatedUserId) === currentUserId ? <button type="button" disabled={isButtonDisabled} onClick={nextEditTaskFunc}>編集</button> : null;
};