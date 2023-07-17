import PropTypes from "prop-types";
import { useGetErrorMessage } from "../../../../../../hooks/useGetErrorMessage";
import { useFollowAndUnFollow } from "../../../../../../hooks/useFollowAndUnFollow";
import { ErrorMessage } from "../../../common/ErrorMessage";
import { FollowButtonSwitch } from "../FollowButtonSwitch";

export const FollowButtonSwitchContainer = ({ userIdToFollowOrUnFollow }) => {
  const { getErrorMessage } = useGetErrorMessage();
  const {
    changeFollowButtonStyle,
    currentUserId,
    error,
    followFunc,
    isFollowing,
    setChangeFollowButtonStyleToFalseFunc,
    setChangeFollowButtonStyleToTrueFunc,
    unFollowFunc,
  } = useFollowAndUnFollow(userIdToFollowOrUnFollow);

  if (error) return <ErrorMessage errorMessage={getErrorMessage(error)} />;
  return (
    <FollowButtonSwitch
      changeFollowButtonStyle={changeFollowButtonStyle}
      currentUserId={currentUserId}
      followFunc={followFunc}
      isFollowing={isFollowing}
      setChangeFollowButtonStyleToFalseFunc={
        setChangeFollowButtonStyleToFalseFunc
      }
      setChangeFollowButtonStyleToTrueFunc={
        setChangeFollowButtonStyleToTrueFunc
      }
      unFollowFunc={unFollowFunc}
      userIdToFollowOrUnFollow={userIdToFollowOrUnFollow}
    />
  );
};

FollowButtonSwitchContainer.propTypes = {
  userIdToFollowOrUnFollow: PropTypes.string.isRequired,
};
