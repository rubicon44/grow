import PropTypes from "prop-types";
import styled from "styled-components";
import { TaskStatusSwitch } from "../../../../tasks/logic/taskStatusSwitch";
import { List } from "../../../../../../presentational/molecules/List";

export const UserTasksAlreadyPostList = ({ userData }) =>
  userData.tasks.map((task) => (
    <ListCoverWrapper key={task.id}>
      <ListCover>
        <List
          title={task.title}
          titleUrl={`/${String(userData.username)}/tasks/${String(task.id)}`}
          content={task.content}
          url={`/${userData.username}`}
          text={userData.nickname}
        />
        <TaskStatusSwitch taskStatus={task.status} />
      </ListCover>
    </ListCoverWrapper>
  ));

UserTasksAlreadyPostList.propTypes = {
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

const ListCoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  margin-top: 30px;
`;

const ListCover = styled.div`
  position: relative;
`;
