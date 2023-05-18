import PropTypes from "prop-types";
import { UserFollowers } from "../UserFollowers";

export const UserFollowersContainer = ({
  currentUserId,
  error,
  followers,
  loading,
  username,
}) => {
  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return (
    <UserFollowers
      currentUserId={currentUserId}
      followers={followers}
      username={username}
    />
  );
};

UserFollowersContainer.defaultProps = {
  error: false,
  loading: false,
  followers: null,
};

UserFollowersContainer.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  error: PropTypes.bool,
  followers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nickname: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ),
  loading: PropTypes.bool,
  username: PropTypes.string.isRequired,
};
