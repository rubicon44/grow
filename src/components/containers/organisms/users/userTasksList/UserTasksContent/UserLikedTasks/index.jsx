import PropTypes from 'prop-types';
import styled from 'styled-components';
import { UserTasksAlreadyLikeList } from '../UserTasksAlreadyLikeList';
import { UserTasksNoLikeList } from '../UserTasksNoLikeList';

export const UserLikedTasks = ({ userData }) => {
  return (
    <>
      <LikedTask>いいねしたタスク</LikedTask>
      {userData.likedTasksWithUser.length === 0 ? (
        <UserTasksNoLikeList userData={userData} />
      ) : (
        <UserTasksAlreadyLikeList userData={userData} />
      )}
    </>
  );
};

UserLikedTasks.propTypes = {
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

const LikedTask = styled.div`
  margin: 30px 0;
  padding-top: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: red;
  border-top: 1px solid #ddd;
`;