import PropTypes from "prop-types";
import styled from "styled-components";
import { UserListItem } from "../ui/UserListItem";

export const UserFollowers = ({ currentUserId, followers }) => {
  const hasFollowers = Array.isArray(followers) && followers.length > 0;

  if (!hasFollowers) {
    return (
      <NoUser>
        <p>フォロワーはいません。</p>
      </NoUser>
    );
  }

  return followers.map((user) => (
    <UserListItem key={user.id} currentUserId={currentUserId} user={user} />
  ));
};

UserFollowers.defaultProps = {
  followers: null,
};

UserFollowers.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  followers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string,
      nickname: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ),
};

const NoUser = styled.div`
  padding: 20px;
  text-align: left;
`;
