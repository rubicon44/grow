export const TaskEditButton = ({ currentUserId, isButtonDisabled, navigateToEditTask, taskCreatedUserId }) => {
  return String(taskCreatedUserId) === currentUserId ? <button type="button" disabled={isButtonDisabled} onClick={navigateToEditTask}>編集</button> : null;
};