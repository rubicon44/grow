import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TaskStatusSwitch } from '../../../../tasks/logic/taskStatusSwitch';
import { List } from '../../../../../../presentational/molecules/List';

export const UserTasksAlreadyPostList = ({ userData }) => {
  return (
    userData.userTasks.map((task) => (
      <ListCoverWrapper key={task.id}>
        <ListCover>
          <List
            title={task.title}
            titleUrl={`/${String(userData.taskUser.username)}/tasks/${String(task.id)}`}
            content={task.content}
            url={`/${userData.taskUser.username}`}
            text={userData.taskUser.nickname}
          />
          <TaskStatusSwitch taskStatus={task.status} />
        </ListCover>
      </ListCoverWrapper>
    ))
  );
};

UserTasksAlreadyPostList.propTypes = {
  userData: PropTypes.shape({
    userTasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        user_id: PropTypes.number,
        content: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    likedTasksWithUser: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        user_id: PropTypes.number,
        content: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    userBio: PropTypes.string,
    userNickName: PropTypes.string,
    userName: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
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