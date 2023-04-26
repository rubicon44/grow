import PropTypes from 'prop-types';
import { SearchListSwitch } from '../SearchListSwitch';

export const SearchListSwitchContainer = ({ error, loading, tasks, users }) => {
  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return <SearchListSwitch
           tasks={tasks}
           users={users}
         />;
};

SearchListSwitchContainer.propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(PropTypes.shape({
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
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    firebase_id: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string,
    nickname: PropTypes.string,
    username: PropTypes.string,
  })).isRequired,
};