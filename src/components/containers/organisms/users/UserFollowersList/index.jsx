import PropTypes from "prop-types";
import { UserFollowersContainer } from "./UserFollowersContainer";
import { TitleWithBackArrowHeader } from "../../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const UserFollowersList = ({
  currentUserId,
  error,
  followers,
  loading,
  username,
}) => (
  <>
    <TitleWithBackArrowHeader>フォロワー</TitleWithBackArrowHeader>
    <UserFollowersContainer
      currentUserId={currentUserId}
      error={error}
      followers={followers}
      loading={loading}
      username={username}
    />
  </>
);

UserFollowersList.defaultProps = {
  error: false,
  loading: false,
};

UserFollowersList.propTypes = {
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
