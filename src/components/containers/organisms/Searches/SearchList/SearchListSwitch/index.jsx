import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SearchTasksList } from './SearchTasksList';
import { SearchUsersList } from './SearchUsersList';

export const SearchListSwitch = ({ sortDescendingOrderTasks, sortDescendingOrderUsers }) => {
  return (
    <ListCover>
      <SearchTasksList sortDescendingOrderTasks={sortDescendingOrderTasks} />
      <SearchUsersList sortDescendingOrderUsers={sortDescendingOrderUsers} />
    </ListCover>
  );
};

SearchListSwitch.propTypes = {
  sortDescendingOrderTasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.number,
    content: PropTypes.string,
    status: PropTypes.number,
    title: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      firebase_id: PropTypes.string,
      bio: PropTypes.string,
      email: PropTypes.string,
      nickname: PropTypes.string,
      username: PropTypes.string,
    }),
  })).isRequired,
  sortDescendingOrderUsers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    firebase_id: PropTypes.string,
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