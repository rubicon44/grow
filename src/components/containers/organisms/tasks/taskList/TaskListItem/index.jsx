import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaquery } from "../../../../../../assets/styles/variable";
import { TaskStatusSwitch } from "../../logic/taskStatusSwitch";
import { TaskDeleteCheckButton } from "../../TaskButton/TaskDeleteCheckButton";
import { TaskEditButton } from "../../TaskButton/TaskEditButton";
import { LikeOrUnLikeButtonSwitchContainer } from "../../../likes/LikeOrUnLikeButtonSwitchContainer";
import { List } from "../../../../../presentational/molecules/List";
import { BaseLink } from "../../../../../presentational/atoms/Link/BaseLink";

export const TaskListItem = ({
  currentUserId,
  deleteCheckFunc,
  isButtonDisabled,
  moveToEditTask,
  task,
}) => (
  <ListContainer>
    <CreatedUserCover>
      <BaseLink url={`/${task.user.username}`}>{task.user.nickname}</BaseLink>
    </CreatedUserCover>
    <ListCover>
      <List title={task.title} content={task.content} />
      <TaskDateCover>
        <p>開始日:{task.startDate}</p>
        <p>終了日:{task.endDate}</p>
      </TaskDateCover>
      <TaskStatusSwitch taskStatus={task.status} />
      <LikeOrUnLikeButtonSwitchContainer taskId={task.id} />
      <ButtonCover>
        <TaskEditButton
          currentUserId={currentUserId}
          isButtonDisabled={isButtonDisabled}
          moveToEditTask={moveToEditTask}
          taskCreatedUserId={task.user.id}
        />
        <TaskDeleteCheckButton
          currentUserId={currentUserId}
          deleteCheckFunc={deleteCheckFunc}
          taskCreatedUserId={task.user.id}
        />
      </ButtonCover>
    </ListCover>
  </ListContainer>
);

TaskListItem.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  deleteCheckFunc: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  moveToEditTask: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.string,
    userId: PropTypes.string,
    content: PropTypes.string,
    endDate: PropTypes.string,
    startDate: PropTypes.string,
    status: PropTypes.number,
    title: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.string,
      bio: PropTypes.string,
      email: PropTypes.string,
      nickname: PropTypes.string,
      username: PropTypes.string,
    }),
  }).isRequired,
};

const CreatedUserCover = styled.span`
  min-width: 40px;
  height: 40px;
  margin-top: 15px;
  margin-right: 5px;
  border-radius: 35px;
  font-size: 12px;
  color: rgb(255, 255, 255);
  background: rgb(237, 128, 119);
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  ${mediaquery.desk`
    margin-right: 10px;
  `}
`;

const ListContainer = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 15px;
  padding: 10px;
  &:not(:last-of-type) {
    border-bottom: 1px solid #ddd;
  }
  ${mediaquery.desk`
    padding: 20px;
  `}
`;

const ListCover = styled.div`
  position: relative;
  width: 100%;
`;

const ButtonCover = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 10px 0;
`;

const TaskDateCover = styled.div`
  text-align: right;
`;
