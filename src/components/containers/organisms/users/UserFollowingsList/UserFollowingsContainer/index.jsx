import PropTypes from "prop-types";
import { UserFollowings } from "../UserFollowings";

export const UserFollowingsContainer = ({
  currentUserId,
  error,
  followings,
  loading,
  username,
}) => {
  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return (
    <UserFollowings
      currentUserId={currentUserId}
      followings={followings}
      username={username}
    />
  );
};

UserFollowingsContainer.defaultProps = {
  error: false,
  loading: false,
  followings: null,
};

UserFollowingsContainer.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  error: PropTypes.bool,
  followings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nickname: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ),
  loading: PropTypes.bool,
  username: PropTypes.string.isRequired,
};
