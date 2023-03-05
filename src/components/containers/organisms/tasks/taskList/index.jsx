import { memo } from 'react';
import styled from 'styled-components';
import { LikeOrUnLikeButtonSwitchContainer } from '../../likes/likeOrUnLikeButtonSwitchContainer';
import { TaskDeleteCheckButton } from '../taskButton/taskDeleteCheckButton';
import { TaskDeleteOrUnDeleteButtonSwitch } from '../taskButton/taskDeleteOrUnDeleteButtonSwitch';
import { TaskEditButton } from '../taskButton/taskEditButton';
import { TaskStatusSwitch } from '../logic/taskStatusSwitch';
import { TitleWithBackArrowHeader } from '../../../../presentational/molecules/header/titleWithBackArrowHeader';
import { List } from '../../../../presentational/molecules/list';
import { Popup } from '../../../../presentational/atoms/popup';

export const TaskList = ({ currentUserId, deleteCheckAble, deleteCheckFunc, deleteTaskFunc, isButtonDisabled, moveToEditTask, showPopup, taskData, unDeleteCheckFunc }) => {
  const { nickname: taskCreatedUserNickName, username: taskCreatedUserName } = taskData.taskCreatedUser;
  const { id: taskId, title: taskTitle, content: taskContent, status: taskStatus, start_date: taskStartDate, end_date: taskEndDate, user_id: taskCreatedUserId } = taskData.task;

  const MemoTitleWithBackArrowHeader = memo(() => {
    return <TitleWithBackArrowHeader>タスク詳細</TitleWithBackArrowHeader>;
  });
  return (
    <>
      <Popup message="タスクが正常に更新されました。" duration={3000} showPopup={showPopup} />
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
        <div>開始日:{taskStartDate}</div>
        <div>終了日:{taskEndDate}</div>
        <LikeOrUnLikeButtonSwitchContainer taskId={String(taskId)} currentUserId={String(currentUserId)} />
        <ButtonCover>
          <TaskEditButton
            currentUserId={currentUserId}
            isButtonDisabled={isButtonDisabled}
            moveToEditTask={moveToEditTask}
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