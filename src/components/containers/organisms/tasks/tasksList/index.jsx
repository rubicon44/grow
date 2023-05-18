import PropTypes from "prop-types";
import styled from "styled-components";
import { LikeOrUnLikeButtonSwitchContainer } from "../../likes/LikeOrUnLikeButtonSwitchContainer";
import { TaskStatusSwitch } from "../logic/taskStatusSwitch";
import { List } from "../../../../presentational/molecules/List";
import { NextButtonLink } from "../../../../presentational/atoms/Link/NextButtonLink";
import { Popup } from "../../../../presentational/atoms/Popup";
import { Title } from "../../../../presentational/atoms/Title";

export const TasksList = ({ showPopup, tasks }) => (
  <>
    <Popup message="タスクが正常に作成されました。" showPopup={showPopup} />
    <Title>タスク一覧</Title>
    <NextButtonLink text="タスク登録" url="/tasks/create" />
    {tasks?.map((task) => {
      const {
        id: taskId,
        title: taskTitle,
        content: taskContent,
        status: taskStatus,
      } = task;
      const { username, nickname } = task.user;
      return (
        <ListCover key={taskId}>
          <List
            title={taskTitle}
            titleUrl={`/${username}/tasks/${String(taskId)}`}
            content={taskContent}
            url={`/${username}`}
            text={nickname}
          />
          <TaskStatusSwitch taskStatus={taskStatus} />
          <LikeOrUnLikeButtonSwitchContainer taskId={String(taskId)} />
        </ListCover>
      );
    })}
  </>
);

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

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;
