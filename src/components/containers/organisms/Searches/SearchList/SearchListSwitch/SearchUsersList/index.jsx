import PropTypes from "prop-types";
import styled from "styled-components";
import { UserListItem } from "../../../../users/ui/UserListItem";

export const SearchUsersList = ({
  currentUserId,
  model,
  outerElementUsersForSearchRef,
  searchPerformed,
  users,
}) =>
  users && users.length > 0
    ? users.map((user) => (
        <UserListItem
          key={user.id}
          currentUserId={currentUserId}
          outerElementUsersForSearchRef={outerElementUsersForSearchRef}
          user={user}
        />
      ))
    : searchPerformed &&
      model === "user" && (
        <ListCover>
          <p>検索結果がありません</p>
        </ListCover>
      );

SearchUsersList.defaultProps = {
  outerElementUsersForSearchRef: null,
};

SearchUsersList.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  outerElementUsersForSearchRef: PropTypes.objectOf(
    PropTypes.instanceOf(Element)
  ),
  searchPerformed: PropTypes.bool.isRequired,
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

const ListCover = styled.div`
  padding: 20px;
`;
