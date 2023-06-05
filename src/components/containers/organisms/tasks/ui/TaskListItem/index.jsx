import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaquery } from "../../../../../../assets/styles/variable";
import { TaskStatusSwitch } from "../../logic/taskStatusSwitch";
import { LikeOrUnLikeButtonSwitchContainer } from "../../../likes/LikeOrUnLikeButtonSwitchContainer";
import { List } from "../../../../../presentational/molecules/List";
import { BaseLink } from "../../../../../presentational/atoms/Link/BaseLink";

export const TaskListItem = ({ task }) => (
  <ListContainer>
    <CreatedUserCover>
      <BaseLink url={`/${task.user.username}`}>{task.user.nickname}</BaseLink>
    </CreatedUserCover>
    <ListCover>
      <Link to={`/${task.user.username}/tasks/${task.id}`}>
        <List title={task.title} content={task.content} />
        <TaskStatusSwitch taskStatus={task.status} />
      </Link>
      <LikeOrUnLikeButtonSwitchContainer taskId={task.id} />
    </ListCover>
  </ListContainer>
);

TaskListItem.propTypes = {
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
