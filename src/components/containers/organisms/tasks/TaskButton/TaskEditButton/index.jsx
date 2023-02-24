export const TaskEditButton = ({ currentUserId, isButtonDisabled, moveToEditTask, taskCreatedUserId }) => {
  return String(taskCreatedUserId) === currentUserId ? <button type="button" disabled={isButtonDisabled} onClick={moveToEditTask}>編集</button> : null;
};