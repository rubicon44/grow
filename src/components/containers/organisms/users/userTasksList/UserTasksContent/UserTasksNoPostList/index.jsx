import PropTypes from 'prop-types';
import styled from 'styled-components';

export const UserTasksNoPostList = ({ userData }) => {
  return (
    <ListCover key={userData.tasks}>
      <div>まだ投稿はありません。</div>
    </ListCover>
  );
};

UserTasksNoPostList.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.number,
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

const ListCover = styled.div`
  position: relative;
`;