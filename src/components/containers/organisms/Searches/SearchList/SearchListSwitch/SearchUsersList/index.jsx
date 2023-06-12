import PropTypes from "prop-types";
import { UserListItem } from "../../../../users/ui/UserListItem";

export const SearchUsersList = ({
  currentUserId,
  outerElementUsersForSearchRef,
  users,
}) =>
  users &&
  users.map((user) => (
    <UserListItem
      key={user.id}
      currentUserId={currentUserId}
      outerElementUsersForSearchRef={outerElementUsersForSearchRef}
      user={user}
    />
  ));

SearchUsersList.defaultProps = {
  outerElementUsersForSearchRef: null,
};

SearchUsersList.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  outerElementUsersForSearchRef: PropTypes.objectOf(
    PropTypes.instanceOf(Element)
  ),
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
