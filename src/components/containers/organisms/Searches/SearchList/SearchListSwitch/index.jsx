import PropTypes from "prop-types";
import { SearchTasksList } from "./SearchTasksList";
import { SearchUsersList } from "./SearchUsersList";

export const SearchListSwitch = ({ tasks, users }) => (
  <>
    <SearchTasksList tasks={tasks} />
    <SearchUsersList users={users} />
  </>
);

SearchListSwitch.propTypes = {
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
