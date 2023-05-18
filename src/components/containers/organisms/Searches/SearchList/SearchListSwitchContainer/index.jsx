import PropTypes from "prop-types";
import { SearchListSwitch } from "../SearchListSwitch";

export const SearchListSwitchContainer = ({ error, loading, tasks, users }) => {
  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return <SearchListSwitch tasks={tasks} users={users} />;
};

SearchListSwitchContainer.defaultProps = {
  error: false,
  loading: false,
};

SearchListSwitchContainer.propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      userId: PropTypes.number,
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
    })
  ).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      bio: PropTypes.string,
      email: PropTypes.string,
      nickname: PropTypes.string,
      username: PropTypes.string,
    })
  ).isRequired,
};
