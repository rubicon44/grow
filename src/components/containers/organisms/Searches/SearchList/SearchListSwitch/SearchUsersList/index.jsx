import PropTypes from "prop-types";
import { UserListItem } from "../../../../users/ui/UserListItem";

// todo: ページネーション or 「さらに表示ボタン」を作成
export const SearchUsersList = ({ currentUserId, users }) =>
  users &&
  users.map((user) => (
    <UserListItem key={user.id} currentUserId={currentUserId} user={user} />
  ));

SearchUsersList.propTypes = {
  currentUserId: PropTypes.string.isRequired,
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
