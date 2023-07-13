import PropTypes from "prop-types";
import { SearchTasksList } from "./SearchTasksList";
import { SearchUsersList } from "./SearchUsersList";

export const SearchListSwitch = ({
  currentUserId,
  model,
  outerElementTasksForSearchRef,
  outerElementUsersForSearchRef,
  searchPerformed,
  tasks,
  users,
}) => (
  <>
    <SearchTasksList
      model={model}
      outerElementTasksForSearchRef={outerElementTasksForSearchRef}
      searchPerformed={searchPerformed}
      tasks={tasks}
    />
    <SearchUsersList
      currentUserId={currentUserId}
      model={model}
      outerElementUsersForSearchRef={outerElementUsersForSearchRef}
      searchPerformed={searchPerformed}
      users={users}
    />
  </>
);

SearchListSwitch.defaultProps = {
  outerElementTasksForSearchRef: null,
  outerElementUsersForSearchRef: null,
};

SearchListSwitch.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  outerElementTasksForSearchRef: PropTypes.objectOf(
    PropTypes.instanceOf(Element)
  ),
  outerElementUsersForSearchRef: PropTypes.objectOf(
    PropTypes.instanceOf(Element)
  ),
  searchPerformed: PropTypes.bool.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      userId: PropTypes.string,
      content: PropTypes.string,
      status: PropTypes.number,
      title: PropTypes.string,
      user: PropTypes.shape({
        id: PropTypes.string,
        avatarUrl: PropTypes.string,
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
      avatarUrl: PropTypes.string,
      bio: PropTypes.string,
      email: PropTypes.string,
      nickname: PropTypes.string,
      username: PropTypes.string,
    })
  ).isRequired,
};
