import PropTypes from "prop-types";
import { UserFollowingsContainer } from "./UserFollowingsContainer";
import { TitleWithBackArrowHeader } from "../../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const UserFollowingsList = ({
  currentUserId,
  error,
  followings,
  loading,
  username,
}) => (
  <>
    <TitleWithBackArrowHeader>フォロー中</TitleWithBackArrowHeader>
    <UserFollowingsContainer
      currentUserId={currentUserId}
      error={error}
      followings={followings}
      loading={loading}
      username={username}
    />
  </>
);

UserFollowingsList.defaultProps = {
  error: false,
  loading: false,
};

UserFollowingsList.propTypes = {
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
