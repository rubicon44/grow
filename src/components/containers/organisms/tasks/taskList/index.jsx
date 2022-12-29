import React from 'react';
import styled from 'styled-components';
import { LikeButton } from 'components/containers/organisms/Likes/LikeButton';
import { TaskDeleteButton } from 'components/containers/organisms/Tasks/TaskButton/TaskDeleteButton';
import { TaskEditButton } from 'components/containers/organisms/Tasks/TaskButton/TaskEditButton';
import { TaskStatusSwitch } from 'components/containers/organisms/Tasks/logic/TaskStatusSwitch';
import { List } from 'components/presentational/molecules/List';

export const TaskList = ({ currentUserId, currentUserName, deleteCheckAble, load, setDeleteCheckAble, setLoad, taskData }) => {
  const { id: taskId } = taskData.task;
  const { title: taskTitle } = taskData.task;
  const { content: taskContent } = taskData.task;
  const { status: taskStatus } = taskData.task;
  const { start_date: startDate } = taskData.task;
  const { end_date: endDate } = taskData.task;
  const { user_id: taskCreatedUserId } = taskData.task;
  const { nickname: taskCreatedUserNickName } = taskData.taskCreatedUser;

  return (
    <ListCover>
      <List
        title={taskTitle}
        titleUrl={`/${taskData.taskCreatedUserName}/tasks/${String(taskData.task.id)}`}
        content={taskContent}
        url={`/${taskData.taskCreatedUserName}`}
        text={taskCreatedUserNickName}
      />
      <TaskStatusSwitch taskStatus={taskStatus} />
      <div>開始日:{startDate}</div>
      <div>終了日:{endDate}</div>
      <LikeButton taskId={String(taskId)} currentUserId={String(currentUserId)} />
      <ButtonCover>
        <TaskEditButton
          deleteCheckAble={deleteCheckAble}
          setDeleteCheckAble={setDeleteCheckAble}
          currentUserId={currentUserId}
          currentUserName={currentUserName}
          endDate={endDate}
          load={load}
          taskContent={taskContent}
          taskCreatedUserId={taskCreatedUserId}
          taskId={taskId}
          taskStatus={taskStatus}
          taskTitle={taskTitle}
          startDate={startDate}
        />
        <TaskDeleteButton
          currentUserId={currentUserId}
          setDeleteCheckAble={setDeleteCheckAble}
          setLoad={setLoad}
          taskCreatedUserId={taskCreatedUserId}
        />
      </ButtonCover>
    </ListCover>
  );
};

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;

const ButtonCover = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 10px 0;
`;