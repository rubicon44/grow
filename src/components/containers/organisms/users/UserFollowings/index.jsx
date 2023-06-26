import PropTypes from "prop-types";
import styled from "styled-components";
import { UserListItem } from "../ui/UserListItem";

export const UserFollowings = ({ currentUserId, followings }) => {
  const hasFollowings = Array.isArray(followings) && followings.length > 0;

  if (!hasFollowings) {
    return (
      <NoUser>
        <p>フォローしているユーザーはいません。</p>
      </NoUser>
    );
  }

  return followings.map((user) => (
    <UserListItem key={user.id} currentUserId={currentUserId} user={user} />
  ));
};

UserFollowings.defaultProps = {
  followings: null,
};

UserFollowings.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  followings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ),
};

const NoUser = styled.div`
  padding: 20px;
  text-align: left;
`;
