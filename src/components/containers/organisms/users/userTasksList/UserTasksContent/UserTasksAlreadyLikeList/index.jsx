import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TaskStatusSwitch } from "../../../../tasks/logic/taskStatusSwitch";
import { LikeOrUnLikeButtonSwitchContainer } from "../../../../likes/LikeOrUnLikeButtonSwitchContainer";
import { List } from "../../../../../../presentational/molecules/List";
import { BaseLink } from "../../../../../../presentational/atoms/Link/BaseLink";

export const UserTasksAlreadyLikeList = ({ userData }) =>
  userData.likedTasks.map((task) => (
    <ListCoverWrapper key={task.id}>
      <CreatedUserCover>
        <BaseLink url={`/${task.user.username}`}>{task.user.nickname}</BaseLink>
      </CreatedUserCover>
      <ListCover>
        <Link to={`/${task.user.username}/tasks/${String(task.id)}`}>
          <List title={task.title} content={task.content} />
          <TaskStatusSwitch taskStatus={task.status} />
        </Link>
        <LikeOrUnLikeButtonSwitchContainer taskId={String(task.id)} />
      </ListCover>
    </ListCoverWrapper>
  ));

UserTasksAlreadyLikeList.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.number,
    bio: PropTypes.string,
    email: PropTypes.string,
    likedTasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        userId: PropTypes.number,
        content: PropTypes.string,
        endDate: PropTypes.string,
        startDate: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    nickname: PropTypes.string,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        userId: PropTypes.number,
        content: PropTypes.string,
        endDate: PropTypes.string,
        startDate: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    username: PropTypes.string,
  }).isRequired,
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

const ListCoverWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(221, 221, 221);
`;

const ListCover = styled.div`
  position: relative;
`;
