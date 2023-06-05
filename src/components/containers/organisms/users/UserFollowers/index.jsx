import PropTypes from "prop-types";
import styled from "styled-components";
import { UserListItem } from "../ui/UserListItem";

export const UserFollowers = ({ currentUserId, followers }) => {
  const hasFollowers = Array.isArray(followers) && followers.length > 0;

  if (!hasFollowers) {
    return <NoUser>フォロワーはいません。</NoUser>;
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
      nickname: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ),
};

const NoUser = styled.div`
  margin-top: 15px;
  padding: 10px;
  text-align: left;
`;
