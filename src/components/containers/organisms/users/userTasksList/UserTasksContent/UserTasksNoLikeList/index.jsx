import PropTypes from 'prop-types';
import styled from 'styled-components';

export const UserTasksNoLikeList = ({ userData }) => {
  return (
    <ListCover key={userData.userLikedTasks}>
      <div>まだいいねはありません。</div>
    </ListCover>
  );
};

UserTasksNoLikeList.propTypes = {
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

const ListCover = styled.div`
  position: relative;
`;