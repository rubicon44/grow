import { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LikeOrUnLikeButtonSwitchContainer } from '../../likes/LikeOrUnLikeButtonSwitchContainer';
import { TaskDeleteCheckButton } from '../TaskButton/TaskDeleteCheckButton';
import { TaskDeleteOrUnDeleteButtonSwitch } from '../TaskButton/TaskDeleteOrUnDeleteButtonSwitch';
import { TaskEditButton } from '../TaskButton/TaskEditButton';
import { TaskStatusSwitch } from '../logic/taskStatusSwitch';
import { TitleWithBackArrowHeader } from '../../../../presentational/molecules/Header/TitleWithBackArrowHeader';
import { List } from '../../../../presentational/molecules/List';
import { Popup } from '../../../../presentational/atoms/Popup';

export const TaskList = ({ currentUserId, deleteCheckAble, deleteCheckFunc, deleteTaskFunc, isButtonDisabled, moveToEditTask, showPopup, taskData, unDeleteCheckFunc }) => {
  const { nickname: taskCreatedUserNickName, username: taskCreatedUserName } = taskData.task.user;
  const { id: taskId, title: taskTitle, content: taskContent, status: taskStatus, start_date: taskStartDate, end_date: taskEndDate, user_id: taskCreatedUserId } = taskData.task;

  const MemoTitleWithBackArrowHeader = memo(() => {
    return <TitleWithBackArrowHeader>タスク詳細</TitleWithBackArrowHeader>;
  });
  return (
    <>
      <Popup message="タスクが正常に更新されました。" showPopup={showPopup} />
      <MemoTitleWithBackArrowHeader />
      <ListCover>
        <List
          title={taskTitle}
          titleUrl={`/${taskCreatedUserName}/tasks/${String(taskId)}`}
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

TaskList.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  deleteCheckAble: PropTypes.bool.isRequired,
  deleteCheckFunc: PropTypes.func.isRequired,
  deleteTaskFunc: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  moveToEditTask: PropTypes.func.isRequired,
  showPopup: PropTypes.bool.isRequired,
  taskData: PropTypes.shape({
    task: PropTypes.shape({
      content: PropTypes.string,
      endDate: PropTypes.string,
      startDate: PropTypes.string,
      status: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  unDeleteCheckFunc: PropTypes.func.isRequired,
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