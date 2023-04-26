import PropTypes from 'prop-types';
import styled from 'styled-components';
import { UserTasksAlreadyLikeList } from '../UserTasksAlreadyLikeList';
import { UserTasksNoLikeList } from '../UserTasksNoLikeList';

export const UserLikedTasks = ({ userData }) => {
  return (
    <>
      <LikedTask>いいねしたタスク</LikedTask>
      {userData.likedTasks.length === 0 ? (
        <UserTasksNoLikeList userData={userData} />
      ) : (
        <UserTasksAlreadyLikeList userData={userData} />
      )}
    </>
  );
};

UserLikedTasks.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.number,
    firebase_id: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string,
    likedTasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      user_id: PropTypes.number,
      content: PropTypes.string,
      end_date: PropTypes.string,
      start_date: PropTypes.string,
      status: PropTypes.number,
      title: PropTypes.string,
    })),
    nickname: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      user_id: PropTypes.number,
      content: PropTypes.string,
      end_date: PropTypes.string,
      start_date: PropTypes.string,
      status: PropTypes.number,
      title: PropTypes.string,
    })),
    username: PropTypes.string,
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