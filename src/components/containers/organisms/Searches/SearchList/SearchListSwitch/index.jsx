import PropTypes from "prop-types";
import { SearchTasksList } from "./SearchTasksList";
import { SearchUsersList } from "./SearchUsersList";

export const SearchListSwitch = ({
  currentUserId,
  outerElementTasksForSearchRef,
  outerElementUsersForSearchRef,
  tasks,
  users,
}) => (
  <>
    <SearchTasksList
      outerElementTasksForSearchRef={outerElementTasksForSearchRef}
      tasks={tasks}
    />
    <SearchUsersList
      currentUserId={currentUserId}
      outerElementUsersForSearchRef={outerElementUsersForSearchRef}
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
