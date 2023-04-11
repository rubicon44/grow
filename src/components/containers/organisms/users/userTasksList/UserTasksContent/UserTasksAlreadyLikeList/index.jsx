import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TaskStatusSwitch } from '../../../../tasks/logic/taskStatusSwitch';
import { List } from '../../../../../../presentational/molecules/List';

export const UserTasksAlreadyLikeList = ({ userData }) => {
  return (
    userData.likedTasksWithUser.map((data) => (
      <ListCoverWrapper key={data.task.id}>
        <ListCover>
          <List
            title={data.task.title}
            titleUrl={`/${String(data.user.username)}/tasks/${String(data.task.id)}`}
            content={data.task.content}
            url={`/${data.user.username}`}
            text={data.user.nickname}
          />
          <TaskStatusSwitch taskStatus={data.task.status} />
        </ListCover>
      </ListCoverWrapper>
    ))
  );
};

UserTasksAlreadyLikeList.propTypes = {
  userData: PropTypes.shape({
    userTasks: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string,
        created_at: PropTypes.string,
        id: PropTypes.number,
        status: PropTypes.number,
        title: PropTypes.string,
        updated_at: PropTypes.string,
        user_id: PropTypes.number,
      })
    ),
    likedTasksWithUser: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string,
        created_at: PropTypes.string,
        id: PropTypes.number,
        status: PropTypes.number,
        title: PropTypes.string,
        updated_at: PropTypes.string,
        user_id: PropTypes.number,
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