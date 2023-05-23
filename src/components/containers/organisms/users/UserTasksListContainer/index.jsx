import PropTypes from "prop-types";
import { useCurrentUserId } from "../../../../../hooks/useCurrentUserId";
import { useMoveToFollowers } from "../../../../../hooks/useMoveToFollowers";
import { useMoveToFollowings } from "../../../../../hooks/useMoveToFollowings";
import { useShowPopup } from "../../../../../hooks/useShowPopup";
import { UserTasksList } from "../userTasksList";

export const UserTasksListContainer = ({
  setCheckUserNameChange,
  setUserData,
  userData,
  userNameInUrl,
}) => {
  const { showPopup } = useShowPopup();
  const currentUserId = useCurrentUserId();

  // todo: useMoveTo~は、API通信用のHooksと見間違える可能性があるため、名称変更した方が良い？
  const { moveToFollowers } = useMoveToFollowers(userData);
  const { moveToFollowings } = useMoveToFollowings(userData);

  return (
    <UserTasksList
      currentUserId={currentUserId}
      moveToFollowers={moveToFollowers}
      moveToFollowings={moveToFollowings}
      setCheckUserNameChange={setCheckUserNameChange}
      setUserData={setUserData}
      showPopup={showPopup}
      userData={userData}
      userNameInUrl={userNameInUrl}
    />
  );
};

UserTasksListContainer.propTypes = {
  setCheckUserNameChange: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    id: PropTypes.number,
    bio: PropTypes.string,
    email: PropTypes.string,
    likedTasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        userId: PropTypes.number,
        content: PropTypes.string,
        endDate: PropTypes.string,
        startDate: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    nickname: PropTypes.string,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        userId: PropTypes.number,
        content: PropTypes.string,
        endDate: PropTypes.string,
        startDate: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    username: PropTypes.string,
  }).isRequired,
  userNameInUrl: PropTypes.string.isRequired,
};
