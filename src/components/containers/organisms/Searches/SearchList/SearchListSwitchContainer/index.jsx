import PropTypes from 'prop-types';
import { SearchListSwitch } from '../SearchListSwitch';

export const SearchListSwitchContainer = ({ error, loading, sortDescendingOrderTasks, sortDescendingOrderUsers }) => {
  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return <SearchListSwitch
           sortDescendingOrderTasks={sortDescendingOrderTasks}
           sortDescendingOrderUsers={sortDescendingOrderUsers}
         />;
};

SearchListSwitchContainer.propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
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