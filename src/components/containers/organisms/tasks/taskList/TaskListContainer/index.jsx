import { useState } from 'react';
import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { useCurrentUserName } from 'hooks/useCurrentUserName';
import { useTaskData } from 'hooks/useTaskData';
import { TaskList } from 'components/containers/organisms/Tasks/TaskList';

export const TaskListContainer = () => {
  const currentUserId = useCurrentUserId();
  const currentUserName = useCurrentUserName();
  const taskData = useTaskData();
  const [load, setLoad] = useState(false);
  const [deleteCheckAble, setDeleteCheckAble] = useState(false);

  return <TaskList
           currentUserId={currentUserId}
           currentUserName={currentUserName}
           deleteCheckAble={deleteCheckAble}
           load={load}
           setDeleteCheckAble={setDeleteCheckAble}
           setLoad={setLoad}
           taskData={taskData}
         />;
};