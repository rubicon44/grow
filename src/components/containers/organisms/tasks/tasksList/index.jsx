import { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { LikeOrUnLikeButtonSwitchContainer } from "../../likes/LikeOrUnLikeButtonSwitchContainer";
import { TaskStatusSwitch } from "../logic/taskStatusSwitch";
import { List } from "../../../../presentational/molecules/List";
import { BaseLink } from "../../../../presentational/atoms/Link/BaseLink";
import { Popup } from "../../../../presentational/atoms/Popup";

export const TasksList = memo(({ showPopup, tasks }) => (
  <>
    <Popup message="タスクが正常に作成されました。" showPopup={showPopup} />
    {tasks?.map((task) => {
      const {
        id: taskId,
        title: taskTitle,
        content: taskContent,
        status: taskStatus,
      } = task;
      const { username, nickname } = task.user;
      return (
        <ListContainer key={taskId}>
          <CreatedUserCover>
            <BaseLink url={`/${username}`}>{nickname}</BaseLink>
          </CreatedUserCover>
          <ListCover>
            <Link to={`/${username}/tasks/${String(taskId)}`}>
              <List title={taskTitle} content={taskContent} />
              <TaskStatusSwitch taskStatus={taskStatus} />
            </Link>
            <LikeOrUnLikeButtonSwitchContainer taskId={String(taskId)} />
          </ListCover>
        </ListContainer>
      );
    })}
  </>
));

TasksList.displayName = "TasksList";

TasksList.propTypes = {
  showPopup: PropTypes.bool.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      endDate: PropTypes.string,
      startDate: PropTypes.string,
      status: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const CreatedUserCover = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-top: 15px;
  margin-right: 15px;
  margin-left: 5px;
  border-radius: 35px;
  font-size: 12px;
  color: rgb(255, 255, 255);
  background: rgb(237, 128, 119);
`;

const ListContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
`;

const ListCover = styled.div`
  position: relative;
`;
