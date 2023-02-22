import { memo } from 'react';
import styled from 'styled-components';
import { LikeOrUnLikeButtonSwitchContainer } from 'components/containers/organisms/Likes/LikeOrUnLikeButtonSwitch/LikeOrUnLikeButtonSwitchContainer';
import { TaskDeleteCheckButton } from 'components/containers/organisms/Tasks/TaskButton/TaskDeleteCheckButton';
import { TaskDeleteOrUnDeleteButtonSwitch } from 'components/containers/organisms/Tasks/TaskButton/TaskDeleteOrUnDeleteButtonSwitch';
import { TaskEditButton } from 'components/containers/organisms/Tasks/TaskButton/TaskEditButton';
import { TaskStatusSwitch } from 'components/containers/organisms/Tasks/logic/TaskStatusSwitch';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';
import { List } from 'components/presentational/molecules/List';
import { Popup } from 'components/presentational/atoms/Popup';

export const TaskList = ({ currentUserId, deleteCheckAble, deleteCheckFunc, deleteTaskFunc, isButtonDisabled, navigateToEditTask, showPopup, taskData, unDeleteCheckFunc }) => {
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
            navigateToEditTask={navigateToEditTask}
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