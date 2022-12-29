import React, { useState } from 'react';
import { useCurrentUserId } from 'hooks/useCurrentUserId';
import { useCurrentUserName } from 'hooks/useCurrentUserName';
import { useTaskData } from 'hooks/useTaskData';
import { TaskDeleteOrUnDeleteButtonSwitch } from 'components/containers/organisms/Tasks/TaskButton/TaskDeleteOrUnDeleteButtonSwitch';
import { TaskList } from 'components/containers/organisms/Tasks/TaskList';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const TaskListContainer = () => {
  const currentUserId = useCurrentUserId();
  const currentUserName = useCurrentUserName();
  const taskData = useTaskData();
  const { id: taskId } = taskData.task;
  const { username: taskCreatedUserName } = taskData.taskCreatedUser;
  const [load, setLoad] = useState(false);
  const [deleteCheckAble, setDeleteCheckAble] = useState(false);

  const MemoTitleWithBackArrowHeader = React.memo(() => {
    return <TitleWithBackArrowHeader>タスク詳細</TitleWithBackArrowHeader>;
  });

  const MemoTaskList = React.memo(TaskList);
  return (
    <>
      <MemoTitleWithBackArrowHeader />
      <MemoTaskList
        currentUserId={currentUserId}
        currentUserName={currentUserName}
        deleteCheckAble={deleteCheckAble}
        load={load}
        setDeleteCheckAble={setDeleteCheckAble}
        setLoad={setLoad}
        taskData={taskData}
      />
      <TaskDeleteOrUnDeleteButtonSwitch
        deleteCheckAble={deleteCheckAble}
        setLoad={setLoad}
        setDeleteCheckAble={setDeleteCheckAble}
        taskId={taskId}
        taskCreatedUserName={taskCreatedUserName}
      />
    </>
  );
};