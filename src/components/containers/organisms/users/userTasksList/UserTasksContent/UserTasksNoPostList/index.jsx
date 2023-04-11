import PropTypes from 'prop-types';
import styled from 'styled-components';

export const UserTasksNoPostList = ({ userData }) => {
  return (
    <ListCover key={userData.userTasks}>
      <div>まだ投稿はありません。</div>
    </ListCover>
  );
};

UserTasksNoPostList.propTypes = {
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

const ListCover = styled.div`
  position: relative;
`;