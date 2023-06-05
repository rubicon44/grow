import PropTypes from "prop-types";
import { SearchForm } from "./SearchForm";
import { SearchListSwitch } from "./SearchListSwitch";

export const SearchList = ({
  currentUserId,
  handleSubmit,
  isButtonDisabled,
  tasks,
  users,
}) => (
  <>
    <SearchForm
      handleSubmit={handleSubmit}
      isButtonDisabled={isButtonDisabled}
    />
    <SearchListSwitch
      currentUserId={currentUserId}
      tasks={tasks}
      users={users}
    />
  </>
);

SearchList.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      userId: PropTypes.string,
      content: PropTypes.string,
      status: PropTypes.number,
      title: PropTypes.string,
      user: PropTypes.shape({
        id: PropTypes.string,
        bio: PropTypes.string,
        email: PropTypes.string,
        nickname: PropTypes.string,
        username: PropTypes.string,
      }),
    })
  ).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      bio: PropTypes.string,
      email: PropTypes.string,
      nickname: PropTypes.string,
      username: PropTypes.string,
    })
  ).isRequired,
};
