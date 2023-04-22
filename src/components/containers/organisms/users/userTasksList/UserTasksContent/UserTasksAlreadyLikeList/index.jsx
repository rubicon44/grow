import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TaskStatusSwitch } from '../../../../tasks/logic/taskStatusSwitch';
import { List } from '../../../../../../presentational/molecules/List';

export const UserTasksAlreadyLikeList = ({ userData }) => {
  return (
    userData.likedTasks.map((data) => (
      <ListCoverWrapper key={data.task.id}>
        <ListCover>
          <List
            title={data.task.title}
            // todo: userDataとdata内のプロパティ名(userName、task)を統一する。
            titleUrl={`/${String(userData.userName)}/tasks/${String(data.task.id)}`}
            content={data.task.content}
            url={`/${userData.userName}`}
            text={userData.userNickName}
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
        id: PropTypes.number,
        user_id: PropTypes.number,
        content: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    likedTasks: PropTypes.arrayOf(PropTypes.shape({
      task: PropTypes.shape({
        id: PropTypes.number,
        user_id: PropTypes.number,
        content: PropTypes.string,
        end_date: PropTypes.string,
        start_date: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      }),
    })),
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