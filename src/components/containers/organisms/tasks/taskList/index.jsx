import PropTypes from "prop-types";
import styled from "styled-components";
import { LikeOrUnLikeButtonSwitchContainer } from "../../likes/LikeOrUnLikeButtonSwitchContainer";
import { TaskDeleteCheckButton } from "../TaskButton/TaskDeleteCheckButton";
import { TaskDeleteOrUnDeleteButtonSwitch } from "../TaskButton/TaskDeleteOrUnDeleteButtonSwitch";
import { TaskEditButton } from "../TaskButton/TaskEditButton";
import { TaskStatusSwitch } from "../logic/taskStatusSwitch";
import { List } from "../../../../presentational/molecules/List";
import { BaseLink } from "../../../../presentational/atoms/Link/BaseLink";
import { PopupContainer } from "../ui/PopupContainer";

export const TaskList = ({
  currentUserId,
  deleteCheckAble,
  deleteCheckFunc,
  deleteTaskFunc,
  isButtonDisabled,
  moveToEditTask,
  taskData,
  unDeleteCheckFunc,
}) => {
  const { nickname: taskCreatedUserNickName, username: taskCreatedUserName } =
    taskData.task.user;
  const {
    id: taskId,
    title: taskTitle,
    content: taskContent,
    status: taskStatus,
    startDate: taskStartDate,
    endDate: taskEndDate,
    userId: taskCreatedUserId,
  } = taskData.task;

  return (
    <>
      <PopupContainer message="タスクが正常に更新されました。" />
      <ListContainer>
        <CreatedUserCover>
          <BaseLink url={`/${taskCreatedUserName}`}>
            {taskCreatedUserNickName}
          </BaseLink>
        </CreatedUserCover>
        <ListCover>
          <List title={taskTitle} content={taskContent} />
          <TaskStatusSwitch taskStatus={taskStatus} />
          <TaskDateCover>
            <p>開始日:{taskStartDate}</p>
            <p>終了日:{taskEndDate}</p>
          </TaskDateCover>
          <LikeOrUnLikeButtonSwitchContainer
            taskId={String(taskId)}
            currentUserId={String(currentUserId)}
          />
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
      </ListContainer>
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
  taskData: PropTypes.shape({
    task: PropTypes.shape({
      // todo: string or numberに統一
      id: PropTypes.number.isRequired,
      content: PropTypes.string,
      endDate: PropTypes.string,
      startDate: PropTypes.string,
      status: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        bio: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }),
      userId: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  unDeleteCheckFunc: PropTypes.func.isRequired,
};

const CreatedUserCover = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-top: 15px;
  margin-right: 15px;
  margin-left: -32px;
  border-radius: 35px;
  font-size: 12px;
  color: rgb(255, 255, 255);
  background: rgb(237, 128, 119);
`;

const ListContainer = styled.div`
  display: flex;
`;

const ListCover = styled.div`
  position: relative;
`;

const ButtonCover = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 10px 0;
`;

const TaskDateCover = styled.div`
  text-align: center;
`;
