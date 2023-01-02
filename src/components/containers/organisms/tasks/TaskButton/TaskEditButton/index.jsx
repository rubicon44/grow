export const TaskEditButton = ({ currentUserId, nextEditTaskFunc, load, taskCreatedUserId }) => {
  return String(taskCreatedUserId) === currentUserId ? <button type="button" disabled={load} onClick={nextEditTaskFunc}>編集</button> : null;
};