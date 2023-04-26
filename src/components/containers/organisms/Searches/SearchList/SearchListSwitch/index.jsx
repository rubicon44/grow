import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SearchTasksList } from './SearchTasksList';
import { SearchUsersList } from './SearchUsersList';

export const SearchListSwitch = ({ tasks, users }) => {
  return (
    <ListCover>
      <SearchTasksList tasks={tasks} />
      <SearchUsersList users={users} />
    </ListCover>
  );
};

SearchListSwitch.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.number,
    content: PropTypes.string,
    status: PropTypes.number,
    title: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      bio: PropTypes.string,
      email: PropTypes.string,
      nickname: PropTypes.string,
      username: PropTypes.string,
    }),
  })).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    bio: PropTypes.string,
    email: PropTypes.string,
    nickname: PropTypes.string,
    username: PropTypes.string,
  })).isRequired,
};

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;