export const TaskDeleteCheckButton = ({ currentUserId, deleteCheckFunc, taskCreatedUserId }) => {
  return String(taskCreatedUserId) === currentUserId ? <button type="button" onClick={deleteCheckFunc}>削除</button> : null;
};