export const TaskDeleteButton = ({ setLoad, setDeleteCheckAble, taskCreatedUserId, currentUserId }) => {
  const deleteCheckFunc = () => {
    setLoad(true);
    setDeleteCheckAble(true);
  };

  return String(taskCreatedUserId) === currentUserId ? <button type="button" onClick={deleteCheckFunc}>削除</button> : null;
};