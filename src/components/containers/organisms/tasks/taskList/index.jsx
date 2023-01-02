import { memo } from 'react';
import styled from 'styled-components';
import { LikeOrUnLikeButtonSwitchContainer } from 'components/containers/organisms/Likes/LikeOrUnLikeButtonSwitch/LikeOrUnLikeButtonSwitchContainer';
import { TaskDeleteCheckButton } from 'components/containers/organisms/Tasks/TaskButton/TaskDeleteCheckButton';
import { TaskDeleteOrUnDeleteButtonSwitch } from 'components/containers/organisms/Tasks/TaskButton/TaskDeleteOrUnDeleteButtonSwitch';
import { TaskEditButton } from 'components/containers/organisms/Tasks/TaskButton/TaskEditButton';
import { TaskStatusSwitch } from 'components/containers/organisms/Tasks/logic/TaskStatusSwitch';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';
import { List } from 'components/presentational/molecules/List';

export const TaskList = ({ currentUserId, deleteCheckAble, deleteCheckFunc, deleteTaskFunc, load, nextEditTaskFunc, taskData, unDeleteCheckFunc }) => {
  const { id: taskId } = taskData.task;
  const { title: taskTitle } = taskData.task;
  const { content: taskContent } = taskData.task;
  const { status: taskStatus } = taskData.task;
  const { start_date: startDate } = taskData.task;
  const { end_date: endDate } = taskData.task;
  const { user_id: taskCreatedUserId } = taskData.task;
  const { nickname: taskCreatedUserNickName } = taskData.taskCreatedUser;
  const { username: taskCreatedUserName } = taskData.taskCreatedUser;

  const MemoTitleWithBackArrowHeader = memo(() => {
    return <TitleWithBackArrowHeader>タスク詳細</TitleWithBackArrowHeader>;
  });

  return (
    <>
      <MemoTitleWithBackArrowHeader />
      <ListCover>
        <List
          title={taskTitle}
          titleUrl={`/${taskCreatedUserName}/tasks/${String(taskData.task.id)}`}
          content={taskContent}
          url={`/${taskCreatedUserName}`}
          text={taskCreatedUserNickName}
        />
        <TaskStatusSwitch taskStatus={taskStatus} />
        <div>開始日:{startDate}</div>
        <div>終了日:{endDate}</div>
        <LikeOrUnLikeButtonSwitchContainer taskId={String(taskId)} currentUserId={String(currentUserId)} />
        <ButtonCover>
          <TaskEditButton
            currentUserId={currentUserId}
            load={load}
            nextEditTaskFunc={nextEditTaskFunc}
            taskCreatedUserId={taskCreatedUserId}
          />
          <TaskDeleteCheckButton
            currentUserId={currentUserId}
            deleteCheckFunc={deleteCheckFunc}
            taskCreatedUserId={taskCreatedUserId}
          />
        </ButtonCover>
      </ListCover>
      <TaskDeleteOrUnDeleteButtonSwitch
        deleteCheckAble={deleteCheckAble}
        deleteTaskFunc={deleteTaskFunc}
        unDeleteCheckFunc={unDeleteCheckFunc}
      />
    </>
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