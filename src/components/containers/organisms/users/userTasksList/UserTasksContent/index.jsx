import PropTypes from 'prop-types';
import styled from 'styled-components';
import { UserTasksContainer } from './UserTasksContainer';
import { UserLikedTasks } from './UserLikedTasks';

export const UserTasksContent = ({ error, loading, moveToGanttChart, userData }) => {
  return (
    <UserTasksContentCover>
      <NextGanttLink type="button" onClick={moveToGanttChart}>ガントチャート</NextGanttLink>
      <UserTasksContainer error={error} laoding={loading} userData={userData} />
      <UserLikedTasks userData={userData} />
    </UserTasksContentCover>
  );
};

UserTasksContent.propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
  moveToGanttChart: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    taskUser: PropTypes.shape({
      bio: PropTypes.string,
      id: PropTypes.number,
      nickname: PropTypes.string,
      tasks: PropTypes.arrayOf(
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
      username: PropTypes.string,
    }),
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
    ).isRequired,
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
    userNickName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }).isRequired,
};

const UserTasksContentCover = styled.article`
  border-top: 1px solid #ddd;
  width: 100%;
`;

const NextGanttLink = styled.button`
  font-size: 22px;
  font-weight: bold;
  font-family: YuMincho;
  color: #ff444f;
  text-decoraiton: none;
`;