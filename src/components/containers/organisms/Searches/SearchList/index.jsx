import PropTypes from "prop-types";
import { SearchForm } from "./SearchForm";
import { SearchListSwitch } from "./SearchListSwitch";

export const SearchList = ({
  currentUserId,
  handleSelectChange,
  handleSubmit,
  isButtonDisabled,
  outerElementTasksForSearchRef,
  outerElementUsersForSearchRef,
  tasks,
  users,
}) => (
  <>
    <SearchForm
      handleSelectChange={handleSelectChange}
      handleSubmit={handleSubmit}
      isButtonDisabled={isButtonDisabled}
    />
    <SearchListSwitch
      currentUserId={currentUserId}
      outerElementTasksForSearchRef={outerElementTasksForSearchRef}
      outerElementUsersForSearchRef={outerElementUsersForSearchRef}
      tasks={tasks}
      users={users}
    />
  </>
);

SearchList.defaultProps = {
  outerElementTasksForSearchRef: null,
  outerElementUsersForSearchRef: null,
};

SearchList.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  outerElementTasksForSearchRef: PropTypes.objectOf(
    PropTypes.instanceOf(Element)
  ),
  outerElementUsersForSearchRef: PropTypes.objectOf(
    PropTypes.instanceOf(Element)
  ),
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
